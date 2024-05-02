import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');

export const filterStyle = StyleSheet.create({
  container: {
    width: '100%',
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginTop: 4,
  },
  items: {
    width: width / 4 - 18,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filters: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  arrowsContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
});
