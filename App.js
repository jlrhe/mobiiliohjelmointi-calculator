import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, Button, Alert, TextInput, Image } from 'react-native';

export default function App() {
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [result, setResult] = useState('');
  const plusButtonPressed = () => {
    setResult(parseFloat(number1) + parseFloat(number2));
  }
  const minusButtonPressed = () => {
    setResult(parseFloat(number1) - parseFloat(number2));
  }
  const clear = () => {
    setNumber1('');
    setNumber2('');
    setResult('');
  }
  return (
    <View style={styles.container}>
      <View style={styles.topBar}>
        <Text style={styles.header}>Calculator</Text>
        <Text style={styles.info}>Fill in numbers and press the desired function. Use '.' for decimal separator</Text>
      </View>
      <View style={styles.calculator}>
        <View style={styles.inputs}>
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number1 => setNumber1(number1)}
            value={number1}
          />
          <TextInput
            style={styles.input}
            keyboardType='numeric'
            onChangeText={number2 => setNumber2(number2)}
            value={number2}
          />
        
          <View style={styles.buttonBar}>
            <Button onPress={plusButtonPressed} title='+' />
            <Button onPress={minusButtonPressed} title='-' />
            <Button onPress={clear} title='clear' />
          </View>
        </View>
        <Text style={styles.result}>Result: {result}</Text>
      </View>
      <StatusBar style="auto" />

      
    </View>
  );
}





const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000',
    marginHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  header: {
    fontSize: 25,
    color: '#fff',
  },
  info: {
    color: '#eee',
    fontStyle: 'italic'
  },
  result: {
    color: '#fff',
    fontSize: 20,
    textAlign: 'center'
  },
  input: {
    width: 200, 
    borderColor: 'gray', 
    borderWidth: 1, 
    color: '#fff', 
    margin: 3,
  },
  inputs: {
    alignItems: 'center',
    justifyContent: 'center',
    width: 202,
  },
  buttonBar: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  inputButton: {
  
  },
  calculator: {
    
  },
});
