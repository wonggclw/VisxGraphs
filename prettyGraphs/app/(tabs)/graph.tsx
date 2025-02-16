import { Text, View, StyleSheet } from 'react-native';

export default function Graph() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Graph Test</Text>
      <Graph />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    /* @tutinfo Add the value of <CODE>backgroundColor</CODE> property with <CODE>'#25292e'</CODE>.*/
    backgroundColor: '#25292e',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#fff',
  },
});
