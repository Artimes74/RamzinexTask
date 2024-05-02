import {StyleSheet} from 'react-native';

export const searchBoxStyle = StyleSheet.create({
  container: {
    width: '88%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  cover: {
    width: '88%',
    height: '65%',
    position: 'absolute',
    backgroundColor: 'transparent',
  },
  box: {
    width: '88%',
    height: '65%',
    flexDirection: 'row',
    borderRadius: 8,
    paddingHorizontal: 4,
  },
  searchIconContainer: {
    width: '12%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '88%',
    height: '100%',
    paddingHorizontal: 6,
    fontSize: 15,
  },
});
