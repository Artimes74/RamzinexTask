import {Dimensions, StyleSheet} from 'react-native';
const {width} = Dimensions.get('screen');

export const appBarStyles = StyleSheet.create({
  appBar: {
    width,
    height: '8%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
  profileContainer: {
    width: '12%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  cancelText: {
    fontSize: 16,
  },
  profileButton: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
