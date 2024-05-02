import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CRYPTO_SIZES} from '../utils/constant';
import {marketDatatype, routeStackParams} from '../utils/types';
import {useTheme} from '../assets/theme';
import {StackNavigationProp} from '@react-navigation/stack';
const {width} = Dimensions.get('screen');

type Props = {
  coin: marketDatatype;
  index: number;
  theme: 'light' | 'dark';
  navigation: StackNavigationProp<routeStackParams, 'home'>;
};

const Crypto = (props: Props) => {
  const {coin, index, theme, navigation} = props;

  const divided = (digit: number) => {
    if (digit.toString().length < 7) {
      return `${(digit / 1000).toFixed(2).toString()}K`;
    } else if (digit.toString().length < 10) {
      return `${(digit / 1000000).toFixed(2).toString()}M`;
    } else {
      return `${(digit / 1000000000).toFixed(2).toString()}B`;
    }
  };

  const isPositive = (number: number) => {
    if (number > 0) {
      return 'positive';
    } else if (number < 0) {
      return 'negative';
    } else {
      return 'neut';
    }
  };

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('coin', {coin: coin});
      }}
      key={index}
      style={[styles.container]}>
      <View style={styles.iconContainer}>
        <View
          style={[
            styles.icon,
            {
              borderWidth: 1,
              borderColor: useTheme(theme).systemColor.secondary,
            },
          ]}>
          <Image
            source={{uri: coin.logo}}
            style={{
              width: '50%',
              height: '50%',
            }}
          />
        </View>
        <Text
          numberOfLines={1}
          style={[styles.name, {color: useTheme(theme).systemColor.text}]}>
          {coin.name.en.split('/')[0]}
        </Text>
      </View>
      <View style={styles.valueContainer}>
        <Text
          numberOfLines={1}
          style={[
            styles.numberText,
            {color: useTheme(theme).systemColor.text},
          ]}>
          {divided(
            coin.financial?.last24h.quote_volume !== undefined
              ? coin.financial?.last24h.quote_volume
              : 0,
          )}
        </Text>
      </View>
      <View style={styles.priceContainer}>
        <Text
          numberOfLines={1}
          style={[
            styles.numberText,
            {color: useTheme(theme).systemColor.text},
          ]}>
          {coin.financial?.last24h.close}
        </Text>
      </View>
      <View style={styles.changesContainer}>
        <View
          style={[
            styles.changesBox,
            {
              backgroundColor:
                isPositive(
                  coin.financial?.last24h.change_percent !== undefined
                    ? coin.financial?.last24h.change_percent
                    : 0,
                ) === 'positive'
                  ? useTheme(theme).systemColor.success
                  : isPositive(
                      coin.financial?.last24h.change_percent !== undefined
                        ? coin.financial?.last24h.change_percent
                        : 0,
                    ) === 'negative'
                  ? useTheme(theme).systemColor.error
                  : useTheme(theme).systemColor.nute,
            },
          ]}>
          <Text
            numberOfLines={1}
            style={[
              styles.numberText,
              {color: useTheme(theme).systemColor.text},
            ]}>
            {coin.financial?.last24h.change_percent.toFixed(2)}
          </Text>
        </View>
      </View>
    </Pressable>
  );
};

export default React.memo(Crypto);

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: CRYPTO_SIZES.card.height,
    alignItems: 'center',
    backgroundColor: 'rgba(31,31,31,1)',
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
    // backgroundColor: 'pink',
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
    // backgroundColor: 'red',
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
