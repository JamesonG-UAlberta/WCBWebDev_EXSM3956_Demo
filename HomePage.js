import { StyleSheet, View, Button } from 'react-native';


export default function HomePage({ navigation }) {
  return (
    <View style={styles.container}>
      <Button title="Go to Info" onPress={() => {
        // Navigate accepts primarily the name of the screen to show, but also optional parameters. These are accessed in the screen using route.params.$name (in this case test).
        navigation.navigate('Info', {test: "Bob"});
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
