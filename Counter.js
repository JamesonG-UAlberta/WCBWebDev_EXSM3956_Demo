import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState, useEffect } from 'react';

export default function Counter(props) {
  const [count, setCount] = useState(0);

  // Any code that relies on a state update should be in UseEffect, not directly after the set.
  useEffect(() => {
    props.callBack(count);
  });

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>The count is: {count}</Text>
      <Button title="Count Up" onPress={() => {setCount(old => old+1); }}></Button>
      <Button title="Reset Count" onPress={() => {setCount(0);}}></Button>
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
      color: '#000',
      fontWeight: 'bold',
      fontSize: 24,
  },
});