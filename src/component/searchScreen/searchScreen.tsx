import React from 'react';
import {FlatList, View} from 'react-native';
import Crypto from '../crypto/crypto';
import {CRYPTO_SIZES} from '../../utils/constant';
import {StackNavigationProp} from '@react-navigation/stack';
import {
  marketDatatype,
  routeStackParams,
  searchScreenType,
} from '../../utils/types';
import {searchScreenStyle} from './style';

type Props = searchScreenType;

const SearchScreen = (props: Props) => {
  const {theme, data, navigation} = props;
  return (
    <View style={searchScreenStyle.container}>
      <FlatList
        data={data}
        style={searchScreenStyle.list}
        keyExtractor={(_, index) => {
          return _.pair_id.toString();
        }}
        bounces={false}
        showsVerticalScrollIndicator={false}
        snapToInterval={CRYPTO_SIZES.card.height}
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

export default SearchScreen;
