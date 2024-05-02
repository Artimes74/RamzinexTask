import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RouteStackNavigation from './src/route/route';

type Props = {};

const App = (props: Props) => (
  <View style={styles.container}>
    <RouteStackNavigation />
  </View>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
