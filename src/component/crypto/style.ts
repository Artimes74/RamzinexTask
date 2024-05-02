import {Dimensions, StyleSheet} from 'react-native';
import {CRYPTO_SIZES} from '../../utils/constant';
const {width} = Dimensions.get('screen');

export const cryptoStyles = StyleSheet.create({
  container: {
    width: '100%',
    height: CRYPTO_SIZES.card.height,
    alignItems: 'center',
    marginVertical: 8,
    borderRadius: 8,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingHorizontal: 8,
  },
  iconContainer: {
    width: width / 4 - 12,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  icon: {
    width: CRYPTO_SIZES.cardIcon.width,
    height: CRYPTO_SIZES.cardIcon.height,
    borderRadius: CRYPTO_SIZES.cardIcon.width / 2,
    justifyContent: 'center',
    alignItems: 'center',
  },
  valueContainer: {
    width: width / 4 - 14,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  priceContainer: {
    width: width / 4 - 14,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changesContainer: {
    width: width / 4 - 14,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  changesBox: {
    width: '75%',
    height: '40%',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  numberText: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  descriptionContainer: {
    width: '80%',
    height: '100%',
    flexDirection: 'row',
    paddingRight: 12,
    justifyContent: 'space-between',
  },
  nameContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginTop: 8,
  },
  buyAndSellsContainer: {
    height: '100%',
    justifyContent: 'space-around',
    paddingLeft: 8,
  },
  amountAndIconContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  buyAndSellsText: {
    fontSize: 14,
    maxWidth: width * 0.135,
    marginHorizontal: 8,
  },
});
