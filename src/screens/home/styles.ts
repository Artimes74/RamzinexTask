import {Dimensions, StyleSheet} from 'react-native';
const {width, height} = Dimensions.get('screen');

export const homeStyles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
  },
  listContainer: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    padding: 8,
  },
});
