import { StyleSheet, Text, View, Button } from 'react-native';


export default function InfoPage({ navigation, route }) {
  return (
    <View style={styles.container}>
      {/* Since we gave a param called test to navigate, we can pull it out here. Just be careful if you have multiple methods of navigation that you don't wind up with a null reference. */}
      <Text>Welcome to this page, {route.params.test}</Text>
      <Button title="Go to Home" onPress={() => {
        // Navigate can also just accept the name of the screen, without params.
        navigation.navigate('Home');
      }} />
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
