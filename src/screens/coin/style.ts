import {Dimensions, StyleSheet} from 'react-native';
import {CRYPTO_SIZES} from '../../utils/constant';
const {width, height} = Dimensions.get('screen');

export const coinStyles = StyleSheet.create({
  container: {
    width,
    height,
    alignItems: 'center',
    justifyContent: 'center',
  },
  divider: {
    width: '100%',
    height: '100%',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  LastPriceAndChanges: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'flex-end',
    paddingHorizontal: 12,
    marginTop: 20,
  },
  coinNameContainer: {
    width: '100%',
    height: '9.5%',
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 10,
  },
  completeCoinName: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  iconContainer: {
    width: '15%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: CRYPTO_SIZES.icon.width,
    height: CRYPTO_SIZES.icon.width,
  },
  names: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  coinNameText: {
    fontSize: 14,
    fontWeight: 'normal',
    marginVertical: 2,
  },
  lastPriceText: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  unitText: {
    fontSize: 17,
    fontWeight: 'bold',
    marginLeft: 8,
    marginBottom: 4,
  },
  changeBox: {
    width: width * 0.16,
    height: width * 0.07,
    marginBottom: 4,
    marginLeft: 16,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  changesText: {
    fontSize: 13,
    fontWeight: 'bold',
  },
  detailsContainer: {
    width: '100%',
    height: '30%',
    flexDirection: 'row',
    marginTop: 20,
    paddingHorizontal: 14,
  },
  half: {
    width: '50%',
    height: '100%',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  detailsBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  detailsTitleText: {
    fontSize: 16,
    fontWeight: 'normal',
    marginBottom: 6,
  },
  detailsPrice: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  buttonContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    paddingVertical: 4,
    marginTop: 30,
  },
  button: {
    width: '46%',
    height: width * 0.14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
    borderWidth: 1,
  },
  buttonText: {
    fontSize: 22,
    fontWeight: 'bold',
  },
});
