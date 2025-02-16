import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

class GraphTest extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Hello, World!</Text>
        <Text style={styles.text}>If you can read this, you can read.</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  text: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
});

export default GraphTest;
