import { StyleSheet, Text, View } from 'react-native';
import { TextInput } from 'react-native-web';

export default function RecieveInput(props) {
  return (
    <View style={styles.container}>
      <Text>{props.name}</Text>
      <TextInput style={styles.textInput} onChangeText={props.callBack} value={props.value} />
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
  textInput: {
    borderRadius: "5px",
    border: "2px solid black"
  }
});
