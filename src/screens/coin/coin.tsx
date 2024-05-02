import React from 'react';
import {
  Dimensions,
  Image,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import ThemeService from '../../services/themeService';
import {useTheme} from '../../assets/theme';
import AppBar from '../../component/appbar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {routeStackParams} from '../../utils/types';
import {CRYPTO_SIZES} from '../../utils/constant';
const {width, height} = Dimensions.get('screen');

type Props = {};
type detailsOfCoinScreenType = RouteProp<routeStackParams, 'coin'>;
const Coin = (props: Props) => {
  const route = useRoute<detailsOfCoinScreenType>();
  const {
    params: {coin},
  } = route;

  const divided = (digit: number) => {
    if (digit.toString().length < 7) {
      return `${(digit / 1000).toFixed(2).toString()}K`;
    } else if (digit.toString().length < 10) {
      return `${(digit / 1000000).toFixed(2).toString()}M`;
    } else {
      return `${(digit / 1000000000).toFixed(2).toString()}B`;
    }
  };
  return (
    <SafeAreaView
      style={[
        styles.container,
        {backgroundColor: useTheme(ThemeService()).systemColor.backgroundColor},
      ]}>
      <View style={styles.divider}>
        <AppBar
          appBarProps={{
            searchBox: false,
            back: true,
          }}
        />
        <View style={styles.coinNameContainer}>
          <View style={styles.iconContainer}>
            <Image source={{uri: coin.logo}} style={styles.icon} />
          </View>
          <View style={styles.names}>
            <Text
              style={[
                styles.completeCoinName,
                {color: useTheme(ThemeService()).systemColor.text},
              ]}>
              {coin.url_name.split('-')[0]}
            </Text>
            <Text
              style={[
                styles.coinNameText,
                {color: useTheme(ThemeService()).systemColor.nute},
              ]}>
              {coin.name.en.split('/')[0]}
            </Text>
          </View>
        </View>
        <View style={styles.LastPriceAndChanges}>
          <Text
            style={[
              styles.lastPriceText,
              {color: useTheme(ThemeService()).systemColor.text},
            ]}>
            {coin.financial?.last24h.close}
          </Text>
          <Text
            style={[
              styles.unitText,
              {color: useTheme(ThemeService()).systemColor.text},
            ]}>
            USD
          </Text>
          <View
            style={[
              styles.changeBox,
              {backgroundColor: useTheme(ThemeService()).systemColor.success},
            ]}>
            <Text
              style={[
                styles.changesText,
                {color: useTheme(ThemeService()).systemColor.text},
              ]}>
              {coin.financial?.last24h.change_percent}%
            </Text>
          </View>
        </View>
        <View style={styles.detailsContainer}>
          <View style={styles.half}>
            <View style={styles.detailsBox}>
              <Text
                style={[
                  styles.detailsTitleText,
                  {color: useTheme(ThemeService()).systemColor.nute},
                ]}>
                Market Price
              </Text>
              <Text
                style={[
                  styles.detailsPrice,
                  {color: useTheme(ThemeService()).systemColor.text},
                ]}>
                {coin.buy}
              </Text>
            </View>
            <View style={styles.detailsBox}>
              <Text
                style={[
                  styles.detailsTitleText,
                  {color: useTheme(ThemeService()).systemColor.nute},
                ]}>
                Market Volume
              </Text>
              <Text
                style={[
                  styles.detailsPrice,
                  {color: useTheme(ThemeService()).systemColor.text},
                ]}>
                {divided(
                  coin.financial?.last24h.quote_volume !== undefined
                    ? coin.financial?.last24h.quote_volume
                    : 0,
                )}
              </Text>
            </View>
            <View style={styles.detailsBox}>
              <Text
                style={[
                  styles.detailsTitleText,
                  {color: useTheme(ThemeService()).systemColor.nute},
                ]}>
                Ordered
              </Text>
              <Text
                style={[
                  styles.detailsPrice,
                  {color: useTheme(ThemeService()).systemColor.text},
                ]}>
                {coin.show_order}
              </Text>
            </View>
          </View>
          <View style={styles.half}>
            <View style={styles.detailsBox}>
              <Text
                style={[
                  styles.detailsTitleText,
                  {color: useTheme(ThemeService()).systemColor.nute},
                ]}>
                24h Lowest
              </Text>
              <Text
                style={[
                  styles.detailsPrice,
                  {color: useTheme(ThemeService()).systemColor.text},
                ]}>
                {coin.financial?.last24h.lowest}
              </Text>
            </View>
            <View style={styles.detailsBox}>
              <Text
                style={[
                  styles.detailsTitleText,
                  {color: useTheme(ThemeService()).systemColor.nute},
                ]}>
                24h highest
              </Text>
              <Text
                style={[
                  styles.detailsPrice,
                  {color: useTheme(ThemeService()).systemColor.text},
                ]}>
                {coin.financial?.last24h.highest}
              </Text>
            </View>
            <View style={styles.detailsBox}>
              <Text
                style={[
                  styles.detailsTitleText,
                  {color: useTheme(ThemeService()).systemColor.nute},
                ]}>
                Open Price
              </Text>
              <Text
                style={[
                  styles.detailsPrice,
                  {color: useTheme(ThemeService()).systemColor.text},
                ]}>
                {coin.financial?.last24h.open}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.buttonContainer}>
          <Pressable
            style={[
              styles.button,
              {backgroundColor: useTheme(ThemeService()).systemColor.success},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: useTheme(ThemeService()).systemColor.text},
              ]}>
              Buy
            </Text>
          </Pressable>
          <Pressable
            style={[
              styles.button,
              {backgroundColor: useTheme(ThemeService()).systemColor.error},
            ]}>
            <Text
              style={[
                styles.buttonText,
                {color: useTheme(ThemeService()).systemColor.text},
              ]}>
              Sell
            </Text>
          </Pressable>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Coin;

const styles = StyleSheet.create({
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
    // height: '9.5%',
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
