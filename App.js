import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { useState } from 'react';

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <View style={styles.container}>
      <Text style={styles.textStyle}>Hello, World!</Text>
      <Text>Hello, User!</Text>
      <Text>The count is: {count}</Text>
      <Button title="Say Hello!" onPress={() => {console.log("Hello! " + count); setCount(old => old+1);}}></Button>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'space-evenly',
  },
  textStyle: {
      color: '#00f',
      fontWeight: 'bold',
      fontSize: 24,
  },
});