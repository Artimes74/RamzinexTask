import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTheme} from '../../assets/theme';
import MarketList from '../../component/marketList';
import AppBar from '../../component/appbar';
import FiltersRow from '../../component/filterRow';
import {useHome} from './useHome';
import {homeStyles} from './styles';
const {width, height} = Dimensions.get('screen');

type Props = {};

const Home = (props: Props) => {
  const {
    ThemeService,
    data,
    sortedData,
    page,
    isLoading,
    // dataFetch,
    fetchData,
    filter,
    updater,
    setData,
    setFilter,
    setPage,
    setSortedData,
    setLoading,
    filtering,
    navigation,
    filterByMarketValue,
    filterByName,
    filterByPrice,
    filterByChanges,
  } = useHome();

  React.useEffect(() => {
    if (isLoading) {
      setTimeout(() => {
        fetchData();
      }, 200);
    }
  }, [page]);

  React.useEffect(() => {
    const interval = setInterval(() => {
      updater();
    }, 20000);

    return () => {
      clearInterval(interval);
    };
  }, [data]);

  React.useEffect(() => {
    if (filter === 'M.V') {
      filterByMarketValue(data);
    } else if (filter === 'Name') {
      filterByName(data);
    } else if (filter === 'Price') {
      filterByPrice(data);
    } else {
      filterByChanges(data);
    }
  }, [data]);

  return (
    <SafeAreaView
      style={[
        homeStyles.container,
        {
          backgroundColor: useTheme(ThemeService()).systemColor.backgroundColor,
        },
      ]}>
      <StatusBar
        barStyle={ThemeService() === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={homeStyles.listContainer}>
        <AppBar
          appBarProps={{
            searchBox: true,
            back: false,
          }}
        />
        <FiltersRow
          theme={ThemeService()}
          data={data}
          filter={filter}
          setData={setData}
          setFilter={setFilter}
          filtering={filtering}
        />
        <MarketList
          theme={ThemeService()}
          data={data}
          setLoading={setLoading}
          setPage={setPage}
          page={page}
          isLoading={isLoading}
          navigation={navigation}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;
