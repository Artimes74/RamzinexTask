import React from 'react';
import {
  Dimensions,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import {useTheme} from '../../assets/config/theme';
import MarketList from '../../component/marketList/marketList';
import AppBar from '../../component/appBar/appbar';
import {useHome} from './useHome';
import {homeStyles} from './styles';
import SearchScreen from '../../component/searchScreen/searchScreen';
import {MARKET_LIST_DATA} from '../../data/data';
import Filters from '../../component/filter/filters';
const {width, height} = Dimensions.get('screen');

type Props = {};

const Home = (props: Props) => {
  const {
    data,
    sortedData,
    page,
    isLoading,
    fetchData,
    filter,
    updater,
    setData,
    setFilter,
    setPage,
    setLoading,
    filtering,
    navigation,
    filterByMarketValue,
    filterByName,
    filterByPrice,
    filterByChanges,
    touch,
    setTouch,
    theme,
    searchData,
    setSearchData,
    AtoZ,
    pSort,
    mvSort,
    chSort,
    setAtoZ,
    setPSort,
    setMvSort,
    setChSort,
  } = useHome();

  React.useEffect(() => {
    if (isLoading && !touch) {
      setTimeout(() => {
        fetchData();
      }, 200);
    }
  }, [page]);

  React.useEffect(() => {
    if (!touch) {
      const interval = setInterval(() => {
        updater();
      }, 20000);

      return () => {
        clearInterval(interval);
      };
    }
  }, [data]);

  React.useEffect(() => {
    if (!touch) {
      if (filter === 'M.V') {
        filterByMarketValue(data, mvSort);
      } else if (filter === 'Name') {
        filterByName(data, AtoZ);
      } else if (filter === 'Price') {
        filterByPrice(data, pSort);
      } else if (filter === '24h Chg') {
        filterByChanges(data, chSort);
      }
    }
  }, [data, AtoZ, pSort]);

  return (
    <SafeAreaView
      style={[
        homeStyles.container,
        {
          backgroundColor: useTheme(theme).systemColor.backgroundColor,
        },
      ]}>
      <StatusBar
        barStyle={theme === 'dark' ? 'light-content' : 'dark-content'}
      />
      <View style={homeStyles.listContainer}>
        <AppBar
          appBarProps={{
            searchBox: {
              data: MARKET_LIST_DATA.data,
              setData: setSearchData,
              touch: touch,
              setTouch: setTouch,
            },
            back: false,
            profile: true,
          }}
          theme={theme}
        />
        {touch ? (
          <SearchScreen
            theme={theme}
            data={searchData}
            navigation={navigation}
          />
        ) : (
          <>
            <Filters
              theme={theme}
              data={data}
              filter={filter}
              setFilter={setFilter}
              filterByMarketValue={filterByMarketValue}
              filterByPrice={filterByPrice}
              filterByChanges={filterByChanges}
              filterByName={filterByName}
              AtoZ={AtoZ}
              pSort={pSort}
              mvSort={mvSort}
              chSort={chSort}
              setAtoZ={setAtoZ}
              setPSort={setPSort}
              setMvSort={setMvSort}
              setChSort={setChSort}
            />
            <MarketList
              theme={theme}
              data={data}
              setLoading={setLoading}
              setPage={setPage}
              page={page}
              isLoading={isLoading}
              navigation={navigation}
              fetchData={fetchData}
            />
          </>
        )}
      </View>
    </SafeAreaView>
  );
};

export default Home;
