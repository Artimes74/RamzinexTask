import {Dimensions} from 'react-native';

const {width, height} = Dimensions.get('screen');
export const APP_BAR_SIZE = width * 0.14;
export const ITEM_PER_SCREEN = 10;
export const FILTER_ROW_HEIGHT = 30;
export const filterData = ['Name', 'M.V', 'Price', '24h Chg'];
export const CRYPTO_SIZES: {
  card: {
    height: number;
  };
  cardIcon: {
    width: number;
    height: number;
  };
  icon: {
    width: number;
    height: number;
  };
} = {
  card: {
    height: width * 0.2,
  },
  cardIcon: {
    width: width * 0.09,
    height: width * 0.09,
  },
  icon: {
    width: width * 0.11,
    height: width * 0.11,
  },
};
