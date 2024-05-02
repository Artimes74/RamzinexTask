import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {MARKET_LIST_DATA} from '../../data/data';
import Crypto from '../crypto/crypto';
import {
  marketDatatype,
  marketListScreenType,
  routeStackParams,
} from '../../utils/types';
import {useTheme} from '../../assets/config/theme';
import {CRYPTO_SIZES} from '../../utils/constant';
import {StackNavigationProp} from '@react-navigation/stack';
import {marketListStyles} from './styles';

type Props = marketListScreenType;

const MarketList = (props: Props) => {
  const {theme, data, setLoading, setPage, page, isLoading, navigation} = props;
  return (
    <View style={marketListStyles.container}>
      <FlatList
        data={data}
        style={marketListStyles.list}
        keyExtractor={(_, index) => _.pair_id.toString()}
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToInterval={CRYPTO_SIZES.card.height}
        onEndReached={() => {
          setLoading(true);
          setPage(page + 1);
        }}
        ListFooterComponent={() => {
          return (
            <View>
              {isLoading ? (
                <ActivityIndicator
                  color={useTheme(theme).systemColor.primary}
                />
              ) : null}
            </View>
          );
        }}
        renderItem={({item, index}) => {
          return (
            <Crypto
              coin={item}
              index={index}
              theme={theme}
              navigation={navigation}
            />
          );
        }}
      />
    </View>
  );
};

export default MarketList;
