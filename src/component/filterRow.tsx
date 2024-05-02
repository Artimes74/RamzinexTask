import React from 'react';
import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import {useTheme} from '../assets/theme';
import ArrowIcon from '../assets/icons/arrow';
import {marketDatatype} from '../utils/types';
import {FILTER_ROW_HEIGHT} from '../utils/constant';
const {width, height} = Dimensions.get('screen');

type Props = {
  theme: 'dark' | 'light';
  filter: 'Name' | '24h Chg' | 'Price' | 'M.V';
  setFilter: React.Dispatch<
    React.SetStateAction<'Name' | '24h Chg' | 'Price' | 'M.V'>
  >;
  data: marketDatatype[];
  setData: React.Dispatch<React.SetStateAction<marketDatatype[]>>;
  filtering: (
    myData: marketDatatype[],
    str: 'Name' | '24h Chg' | 'Price' | 'M.V',
    direction: 'up' | 'down' | 'none',
  ) => void;
};

const filterData = ['Name', 'M.V', 'Price', '24h Chg'];

const FiltersRow = (props: Props) => {
  const {theme, filter, setFilter, setData, data, filtering} = props;
  const [upNArrowColor, setUpNArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [upMvArrowColor, setUpMvArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [upPArrowColor, setUpPArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [upChArrowColor, setUpChArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [downNArrowColor, setDownNArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [downMvArrowColor, setDownMvArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [downPArrowColor, setDownPArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [downChArrowColor, setDownChArrowColor] = React.useState<string>(
    useTheme(theme).systemColor.nute,
  );
  const [selected, setSelected] = React.useState<
    'Name' | '24h Chg' | 'Price' | 'M.V' | ''
  >('');
  const [dir, setDir] = React.useState<0 | 1 | 2>(0);
  const [nDirection, setNDirection] = React.useState<0 | 1 | 2>(0);
  const [mvDirection, setMvDirection] = React.useState<0 | 1 | 2>(0);
  const [pDirection, setPDirection] = React.useState<0 | 1 | 2>(0);
  const [chDirection, setChDirection] = React.useState<0 | 1 | 2>(0);

  const filterHandler = (
    item: 'Name' | '24h Chg' | 'Price' | 'M.V',
    direction: 0 | 1 | 2,
  ) => {
    if (item === 'Name') {
      setChDirection(0);
      setMvDirection(0);
      setPDirection(0);
      if (direction === 0) {
        filtering(data, 'Name', 'up');
        setNDirection(2);
        setDownNArrowColor(useTheme(theme).systemColor.nute);
        setUpNArrowColor(useTheme(theme).systemColor.text);
      } else if (direction === 1) {
        filtering(data, 'Name', 'up');
        setDownNArrowColor(useTheme(theme).systemColor.nute);
        setUpNArrowColor(useTheme(theme).systemColor.text);
        setNDirection(2);
      } else {
        console.log('bb');
        filtering(data, 'Name', 'down');
        setNDirection(1);
        setUpNArrowColor(useTheme(theme).systemColor.nute);
        setDownNArrowColor(useTheme(theme).systemColor.text);
        setNDirection(1);
      }
    } else if (item === 'Price') {
      setChDirection(0);
      setMvDirection(0);
      setNDirection(0);

      if (direction === 0) {
        filtering(data, 'Price', 'up');
        setPDirection(2);
        setUpPArrowColor(useTheme(theme).systemColor.nute);
        setDownPArrowColor(useTheme(theme).systemColor.text);
      } else if (direction === 1) {
        filtering(data, 'Price', 'up');
        setPDirection(2);
        setUpPArrowColor(useTheme(theme).systemColor.nute);
        setDownPArrowColor(useTheme(theme).systemColor.text);
      } else {
        filtering(data, 'Price', 'down');
        setPDirection(1);
        setUpPArrowColor(useTheme(theme).systemColor.nute);
        setDownPArrowColor(useTheme(theme).systemColor.text);
      }
    } else if (item === 'M.V') {
      setChDirection(0);
      setPDirection(0);
      setNDirection(0);

      if (direction === 0) {
        filtering(data, 'M.V', 'up');
        setMvDirection(2);
        setUpMvArrowColor(useTheme(theme).systemColor.text);
        setDownMvArrowColor(useTheme(theme).systemColor.nute);
      }
      if (direction === 1) {
        filtering(data, 'M.V', 'up');
        setMvDirection(2);
        setUpMvArrowColor(useTheme(theme).systemColor.text);
        setDownMvArrowColor(useTheme(theme).systemColor.nute);
      } else {
        filtering(data, 'M.V', 'down');
        setMvDirection(1);
        setUpMvArrowColor(useTheme(theme).systemColor.nute);
        setDownMvArrowColor(useTheme(theme).systemColor.text);
      }
    } else {
      setMvDirection(0);
      setPDirection(0);
      setNDirection(0);

      if (direction === 0) {
        filtering(data, '24h Chg', 'up');
        setChDirection(2);
        setUpChArrowColor(useTheme(theme).systemColor.text);
        setDownChArrowColor(useTheme(theme).systemColor.nute);
      }
      if (direction === 1) {
        filtering(data, '24h Chg', 'up');
        setChDirection(2);
        setUpChArrowColor(useTheme(theme).systemColor.text);
        setDownChArrowColor(useTheme(theme).systemColor.nute);
      } else {
        filtering(data, '24h Chg', 'down');
        setChDirection(1);
        setUpChArrowColor(useTheme(theme).systemColor.nute);
        setDownChArrowColor(useTheme(theme).systemColor.text);
      }
    }
  };

  const colorHandler = (direction: 'up' | 'down' | 'none') => {};

  const setColor = (item: 'Name' | 'M.V' | 'Price' | '24h Chg') => {
    if (item === 'Name' && nDirection === 1) {
      // setUpArrowColor(useTheme(theme).systemColor.text)
      return useTheme(theme).systemColor.text;
    } else if (item === 'Name' && nDirection === 1) {
    }
    {
      return useTheme(theme).systemColor.nute;
    }
  };

  return (
    <View style={styles.container}>
      {filterData.map((item, index) => {
        return (
          <Pressable
            onPress={() => {
              // @ts-ignore
              filtering(data, item);
              if (item === 'Name') {
                filterHandler(item, nDirection);
              } else if (item === 'M.V') {
                filterHandler(item, mvDirection);
              } else if (item === 'Price') {
                filterHandler(item, pDirection);
              } else {
                filterHandler('24h Chg', chDirection);
              }
            }}
            style={[styles.items]}>
            <Text
              style={[
                styles.filters,
                {color: useTheme(theme).systemColor.text},
              ]}>
              {item}
            </Text>
            <View style={styles.arrowsContainer}>
              <ArrowIcon
                width={8}
                height={8}
                color={
                  selected === item && dir === 2
                    ? useTheme(theme).systemColor.text
                    : useTheme(theme).systemColor.nute
                }
                rotation="0 deg"
              />
              <ArrowIcon
                width={8}
                height={8}
                rotation="180 deg"
                color={
                  item === 'Name'
                    ? downNArrowColor
                    : item === 'M.V'
                    ? downMvArrowColor
                    : item === 'Price'
                    ? downPArrowColor
                    : downChArrowColor
                }
              />
            </View>
          </Pressable>
        );
      })}
    </View>
  );
};

export default FiltersRow;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    // height: FILTER_ROW_HEIGHT,
    height: '5%',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  items: {
    width: width / 4 - 18,
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
  },
  filters: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  arrowsContainer: {
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 2,
  },
});
