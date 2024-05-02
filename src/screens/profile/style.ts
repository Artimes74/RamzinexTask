import {Dimensions, StyleSheet} from 'react-native';
import {APP_BAR_SIZE} from '../../utils/constant';
const {width, height} = Dimensions.get('screen');

export const profileStyles = StyleSheet.create({
  container: {
    width,
    height,
  },
  graben: {
    width: '100%',
    height: '100%',
    padding: 8,
  },
  choiceFiled: {
    width: '100%',
    height: APP_BAR_SIZE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 30,
  },
  bottomSheetContainer: {
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
  },
  titleText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  valueContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  value: {
    fontSize: 20,
    marginHorizontal: 8,
  },
  SelectedFiled: {
    height: APP_BAR_SIZE,
    flexDirection: 'row-reverse',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 12,
    paddingHorizontal: 18,
  },
  choice: {
    fontSize: 20,
    fontWeight: 'bold',
    marginHorizontal: 20,
  },
});
