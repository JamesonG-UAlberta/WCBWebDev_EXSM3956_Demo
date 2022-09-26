import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';
import Counter from './Counter';

export default function App() {

  const [countOne, setCountOne] = useState(0);
  const [countTwo, setCountTwo] = useState(0);


  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, World!</Text>
      <Text>Hello, User!</Text>
      <Text>The total of the counters is: {countOne + countTwo}</Text>
      <View style={[styles.container, {
        flexDirection: 'row'}]}>
        <Counter callBack={(newValue) => {setCountOne(newValue);}} />
        <Counter callBack={(newValue) => {setCountTwo(newValue);}} />
      </View>
      
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textStyle: {
      color: '#00f',
      fontWeight: 'bold',
      fontSize: 24,
  },
});