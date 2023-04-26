import React, { useState } from 'react';
import {
  Button,
  StyleSheet,
  Text,
  TouchableOpacity,
  View
} from 'react-native';




const App = () => {

  const [count, setCount] = useState(0);

  const handleIncrement = () => {
      setCount(count + 1);
  }

  const handleDecrement = () => {
    setCount(count - 1);
  }

  const AppButton = ({ onPress, title}) => (
    <TouchableOpacity onPress={onPress} style={styles.appButtonCon}>
      <Text style={styles.appButtonText}>{title}</Text>
    </TouchableOpacity>
  )


    return (
      <View style={styles.viewCon}>
        <Text style={styles.textCon}>{count}</Text>
        <AppButton title='Increment' onPress={handleIncrement} />
        <AppButton title='Decrement' onPress={handleDecrement}></AppButton>
      </View>
    )
}


const styles = StyleSheet.create({
  
  viewCon : {
    padding: 10,
  },

  textCon : {
    textAlign: 'center',
    margin: 50,
    fontSize: 50,
    color: 'black',
    fontWeight: 'bold'
  },

  appButtonCon : {
    backgroundColor: 'green',
    margin : 10,
    borderRadius: 25,
    padding: 10,
    elevation: 8
  },

  appButtonText : {
    color: 'white',
    textAlign: 'center',
    fontSize: 25,
    fontWeight: 'bold',
    textTransform: 'uppercase'
  }
  

});

export default App;
