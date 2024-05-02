import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../../assets/config/theme';
import ArrowIcon from '../../assets/icons/arrow';
import {filterScreenType, filtersType, marketDatatype} from '../../utils/types';
import {filterData} from '../../utils/constant';
import {useFilters} from './useFilters';
import {filterStyle} from './styles';
const {width} = Dimensions.get('screen');

type Props = filterScreenType;

const Filters = (props: Props) => {
  const {
    theme,
    setFilter,
    data,
    filterByMarketValue,
    filterByChanges,
    filterByName,
    filterByPrice,
    AtoZ,
    pSort,
    mvSort,
    chSort,
    setAtoZ,
    setPSort,
    setMvSort,
    setChSort,
  } = props;

  const {sortBy} = useFilters();

  return (
    <View style={filterStyle.container}>
      {filterData.map((item, index) => {
        return (
          <Pressable
            key={index}
            onPress={() => {
              sortBy(
                item,
                filterByName,
                filterByMarketValue,
                filterByPrice,
                filterByChanges,
                data,
                setFilter,
                AtoZ,
                pSort,
                mvSort,
                chSort,
                setAtoZ,
                setPSort,
                setMvSort,
                setChSort,
              );
            }}
            style={[filterStyle.items]}>
            <Text
              style={[
                filterStyle.filters,
                {color: useTheme(theme).systemColor.text},
              ]}>
              {item}
            </Text>
          </Pressable>
        );
      })}
    </View>
  );
};

export default Filters;
