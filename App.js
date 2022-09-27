import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer, StackActions } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Text>Hello, World!</Text>
      <View style={styles.container}>
        <Stack.Navigator>
          <Stack.Screen name="" component={} options={} />
          <Stack.Screen name="" component={} options={} />
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
