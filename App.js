import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import RecieveInput from './RecieveInput';
import { useState } from 'react';

export default function App() {
  const [userName, setUserName] = useState("Name");
  const [city, setCity] = useState("City");

  return (
    <View style={styles.container}>
      <Text>Welcome, {userName}, to the city of {city}!</Text>
      <RecieveInput name="User Name" value={userName} callBack={(newValue) => {setUserName(newValue);}}/>
      <RecieveInput name="City" value={city} callBack={(newValue) => {setCity(newValue);}}/>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
