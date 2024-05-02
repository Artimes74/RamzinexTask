import React from 'react';
import {
  Dimensions,
  FlatList,
  StyleSheet,
  View,
  ActivityIndicator,
} from 'react-native';
import {MARKET_LIST_DATA} from '../data/data';
import Crypto from './crypto';
import {marketDatatype, routeStackParams} from '../utils/types';
import {Screen} from 'react-native-screens';
import {useTheme} from '../assets/theme';
import {APP_BAR_SIZE, CRYPTO_SIZES, FILTER_ROW_HEIGHT} from '../utils/constant';
import {StackNavigationProp} from '@react-navigation/stack';
const {width, height} = Dimensions.get('window');

type Props = {
  theme: 'dark' | 'light';
  data: marketDatatype[];
  page: number;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  navigation: StackNavigationProp<routeStackParams, 'home'>;
};

const MarketList = (props: Props) => {
  const {theme, data, setLoading, setPage, page, isLoading, navigation} = props;
  const memoRender = React.useMemo(() => Crypto, [data]);
  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        style={styles.list}
        keyExtractor={(_, index) => {
          return _.pair_id.toString();
        }}
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
              key={item.pair_id}
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

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '87%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  list: {
    width: '100%',
  },
});
