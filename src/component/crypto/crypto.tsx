import {
  Dimensions,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {CRYPTO_SIZES} from '../../utils/constant';
import {cryptoType, marketDatatype, routeStackParams} from '../../utils/types';
import {useTheme} from '../../assets/config/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {useCrypto} from './useCrypto';
import {cryptoStyles} from './style';
const {width} = Dimensions.get('screen');

type Props = cryptoType;

const Crypto = (props: Props) => {
  const {coin, index, theme, navigation} = props;

  const {divided, isPositive} = useCrypto();

  return (
    <Pressable
      onPress={() => {
        navigation.navigate('coin', {coin: coin});
      }}
      key={index}
      style={[
        cryptoStyles.container,
        {backgroundColor: useTheme(theme).systemColor.thirdColor},
      ]}>
      <View style={cryptoStyles.iconContainer}>
        <View
          style={[
            cryptoStyles.icon,
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
          style={[
            cryptoStyles.name,
            {color: useTheme(theme).systemColor.text},
          ]}>
          {coin.name.en.split('/')[0]}
        </Text>
      </View>
      <View style={cryptoStyles.valueContainer}>
        <Text
          numberOfLines={1}
          style={[
            cryptoStyles.numberText,
            {color: useTheme(theme).systemColor.text},
          ]}>
          {divided(
            coin.financial?.last24h.quote_volume !== undefined
              ? coin.financial?.last24h.quote_volume
              : 0,
          )}
        </Text>
      </View>
      <View style={cryptoStyles.priceContainer}>
        <Text
          numberOfLines={1}
          style={[
            cryptoStyles.numberText,
            {color: useTheme(theme).systemColor.text},
          ]}>
          {coin.financial?.last24h.close}
        </Text>
      </View>
      <View style={cryptoStyles.changesContainer}>
        <View
          style={[
            cryptoStyles.changesBox,
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
              cryptoStyles.numberText,
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
