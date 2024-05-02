import {Dimensions, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import RouteStackNavigation from './src/route/route';
import {Provider} from 'react-redux';
import store from './src/redux/stroe';

type Props = {};

const App = (props: Props) => (
  <Provider store={store}>
    <View style={styles.container}>
      <RouteStackNavigation />
    </View>
  </Provider>
);

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
