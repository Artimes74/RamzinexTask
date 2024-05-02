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
import {useTheme} from '../../assets/config/theme';
import AppBar from '../../component/appBar/appbar';
import {RouteProp, useRoute} from '@react-navigation/native';
import {routeStackParams} from '../../utils/types';
import {CRYPTO_SIZES} from '../../utils/constant';
import {useCoin} from './useCoin';
import {coinStyles} from './style';
const {width, height} = Dimensions.get('screen');

type detailsOfCoinScreenType = RouteProp<routeStackParams, 'coin'>;
const Coin = () => {
  const route = useRoute<detailsOfCoinScreenType>();
  const {
    params: {coin},
  } = route;

  const {theme, divided} = useCoin();

  return (
    <SafeAreaView
      style={[
        coinStyles.container,
        {backgroundColor: useTheme(theme).systemColor.backgroundColor},
      ]}>
      <View style={coinStyles.divider}>
        <AppBar
          theme={theme}
          appBarProps={{
            searchBox: false,
            back: {
              text: 'Details',
            },
            profile: false,
          }}
        />
        <View style={coinStyles.coinNameContainer}>
          <View style={coinStyles.iconContainer}>
            <Image source={{uri: coin.logo}} style={coinStyles.icon} />
          </View>
          <View style={coinStyles.names}>
            <Text
              style={[
                coinStyles.completeCoinName,
                {color: useTheme(theme).systemColor.text},
              ]}>
              {coin.url_name.split('-')[0]}
            </Text>
            <Text
              style={[
                coinStyles.coinNameText,
                {color: useTheme(theme).systemColor.nute},
              ]}>
              {coin.name.en.split('/')[0]}
            </Text>
          </View>
        </View>
        <View style={coinStyles.LastPriceAndChanges}>
          <Text
            style={[
              coinStyles.lastPriceText,
              {color: useTheme(theme).systemColor.text},
            ]}>
            {coin.financial?.last24h.close}
          </Text>
          <Text
            style={[
              coinStyles.unitText,
              {color: useTheme(theme).systemColor.text},
            ]}>
            USD
          </Text>
          <View
            style={[
              coinStyles.changeBox,
              {backgroundColor: useTheme(theme).systemColor.success},
            ]}>
            <Text
              style={[
                coinStyles.changesText,
                {color: useTheme(theme).systemColor.text},
              ]}>
              {coin.financial?.last24h.change_percent}%
            </Text>
          </View>
        </View>
        <View style={coinStyles.detailsContainer}>
          <View style={coinStyles.half}>
            <View style={coinStyles.detailsBox}>
              <Text
                style={[
                  coinStyles.detailsTitleText,
                  {color: useTheme(theme).systemColor.nute},
                ]}>
                Market Price
              </Text>
              <Text
                style={[
                  coinStyles.detailsPrice,
                  {color: useTheme(theme).systemColor.text},
                ]}>
                {coin.buy}
              </Text>
            </View>
            <View style={coinStyles.detailsBox}>
              <Text
                style={[
                  coinStyles.detailsTitleText,
                  {color: useTheme(theme).systemColor.nute},
                ]}>
                Market Volume
              </Text>
              <Text
                style={[
                  coinStyles.detailsPrice,
                  {color: useTheme(theme).systemColor.text},
                ]}>
                {divided(
                  coin.financial?.last24h.quote_volume !== undefined
                    ? coin.financial?.last24h.quote_volume
                    : 0,
                )}
              </Text>
            </View>
            <View style={coinStyles.detailsBox}>
              <Text
                style={[
                  coinStyles.detailsTitleText,
                  {color: useTheme(theme).systemColor.nute},
                ]}>
                Ordered
              </Text>
              <Text
                style={[
                  coinStyles.detailsPrice,
                  {color: useTheme(theme).systemColor.text},
                ]}>
                {coin.show_order}
              </Text>
            </View>
          </View>
          <View style={coinStyles.half}>
            <View style={coinStyles.detailsBox}>
              <Text
                style={[
                  coinStyles.detailsTitleText,
                  {color: useTheme(theme).systemColor.nute},
                ]}>
                24h Lowest
              </Text>
              <Text
                style={[
                  coinStyles.detailsPrice,
                  {color: useTheme(theme).systemColor.text},
                ]}>
                {coin.financial?.last24h.lowest}
              </Text>
            </View>
            <View style={coinStyles.detailsBox}>
              <Text
                style={[
                  coinStyles.detailsTitleText,
                  {color: useTheme(theme).systemColor.nute},
                ]}>
                24h highest
              </Text>
              <Text
                style={[
                  coinStyles.detailsPrice,
                  {color: useTheme(theme).systemColor.text},
                ]}>
                {coin.financial?.last24h.highest}
              </Text>
            </View>
            <View style={coinStyles.detailsBox}>
              <Text
                style={[
                  coinStyles.detailsTitleText,
                  {color: useTheme(theme).systemColor.nute},
                ]}>
                Open Price
              </Text>
              <Text
                style={[
                  coinStyles.detailsPrice,
                  {color: useTheme(theme).systemColor.text},
                ]}>
                {coin.financial?.last24h.open}
              </Text>
            </View>
          </View>
        </View>
        <View style={coinStyles.buttonContainer}>
          <Pressable
            style={[
              coinStyles.button,
              {backgroundColor: useTheme(theme).systemColor.success},
            ]}>
            <Text
              style={[
                coinStyles.buttonText,
                {color: useTheme(theme).systemColor.text},
              ]}>
              Buy
            </Text>
          </Pressable>
          <Pressable
            style={[
              coinStyles.button,
              {backgroundColor: useTheme(theme).systemColor.error},
            ]}>
            <Text
              style={[
                coinStyles.buttonText,
                {color: useTheme(theme).systemColor.text},
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
