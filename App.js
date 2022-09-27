import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomePage from './HomePage';
import InfoPage from './InfoPage';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>

      <View style={styles.container}>
        {/* Anything outside of the Stack.Navigator will be persistent across screens (useful for menus). */}
        <Text>Hello, World! This Text is Persistent!</Text>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomePage} />
          <Stack.Screen name="Info" component={InfoPage} />
        </Stack.Navigator>
        <StatusBar style="auto" />
      </View>
    </NavigationContainer>
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
