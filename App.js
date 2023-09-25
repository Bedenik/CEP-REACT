import React from 'react';
import { View, StyleSheet } from 'react-native';
import TelaCEP from './src/screens/TelaCEP';

export default function App() {
  return (
    <View style={styles.container}>
      <TelaCEP/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ' #cedddf',
    justifyContent: 'center',
  },
});
