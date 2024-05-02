import React, {useMemo} from 'react';
import {MARKET_LIST_DATA} from '../../data/data';
import {ITEM_PER_SCREEN} from '../../utils/constant';
import {
  filtersType,
  marketDatatype,
  routeStackParams,
  themeType,
} from '../../utils/types';
import ThemeService from '../../hook/themeService';
import {StackNavigationProp} from '@react-navigation/stack';
import {useNavigation} from '@react-navigation/native';
import {useAppSelector} from '../../hook/reduxHook';

type dataFetchProps = {
  multiTo: number;
};

export const useHome = () => {
  const appTheme = useAppSelector(state => state.reducers.userReducer.theme);
  const theme: 'dark' | 'light' = ThemeService(appTheme);
  const [data, setData] = React.useState<marketDatatype[]>([]);
  const [sortedData, setSortedData] = React.useState<marketDatatype[]>([]);
  const [searchData, setSearchData] = React.useState<marketDatatype[]>([]);
  const [page, setPage] = React.useState<number>(1);
  const [touch, setTouch] = React.useState<boolean>(false);
  const [isLoading, setLoading] = React.useState<boolean>(true);
  const [filter, setFilter] = React.useState<filtersType>('M.V');
  const [AtoZ, setAtoZ] = React.useState<'UP' | 'DOWN'>('DOWN');
  const [pSort, setPSort] = React.useState<'UP' | 'DOWN'>('DOWN');
  const [mvSort, setMvSort] = React.useState<'UP' | 'DOWN'>('DOWN');
  const [chSort, setChSort] = React.useState<'UP' | 'DOWN'>('DOWN');
  type navigationType = StackNavigationProp<routeStackParams, 'home'>;
  const navigation = useNavigation<navigationType>();

  const memoizedFetchData = () => {
    for (let index = (page - 1) * 10; index < page * 10; index++) {
      if (index < MARKET_LIST_DATA.data.length) {
        setData(prv => {
          return [...prv, MARKET_LIST_DATA.data[index]];
        });
      } else {
        setLoading(false);
      }
    }

    setLoading(false);
  };

  const fetchData = useMemo(() => memoizedFetchData, [page]);

  const filtering = (
    myData: marketDatatype[],
    str: 'Name' | '24h Chg' | 'Price' | 'M.V',
    direction: 'up' | 'down' | 'none',
  ) => {
    let sorted: marketDatatype[] = [];
    switch (str) {
      case 'Name':
        setData([]);
        sorted = myData.sort((x, y) => {
          // Convert both strings to lowercase for case-insensitive comparison

          const lowercaseX = x.name.en.split('/')[0].toLowerCase();
          const lowercaseY = y.name.en.split('/')[0].toLowerCase();

          // Compare the lowercase versions of strings
          if (lowercaseX < lowercaseY) {
            return -1; // Return a negative value if x should come before y
          } else if (lowercaseX > lowercaseY) {
            return 1; // Return a positive value if x should come after y
          } else {
            return 0; // Return 0 if x and y are equal
          }
        });
        for (let index = 0 * 10; index < sorted.length; index++) {
          setData(prv => {
            return [...prv, sorted[index]];
          });
          // setSortedData(prv => {
          //   return [...prv, sorted[index]];
          // });
        }
        break;
      case 'M.V':
        // const sorted = data.sort((a, b) => a - b);

        if (direction === 'none' || direction === 'up') {
          sorted = myData.sort(
            (a, b) =>
              // @ts-ignore
              b.financial?.last24h.quote_volume -
              // @ts-ignore
              a.financial?.last24h.quote_volume,
          );
        } else {
          sorted = myData.sort(
            (a, b) =>
              // @ts-ignore
              a.financial?.last24h.quote_volume -
              // @ts-ignore
              b.financial?.last24h.quote_volume,
          );
        }

        for (let index = 0; index < sorted.length; index++) {
          setData(sorted);
          // setSortedData(prv => {
          //   return [...prv, sorted[index]];
          // });
        }
        break;
      case 'Price':
        if (direction === 'none' || direction === 'up') {
          sorted = myData.sort(
            (a, b) =>
              // @ts-ignore
              b.financial?.last24h.quote_volume -
              // @ts-ignore
              a.financial?.last24h.quote_volume,
          );
        } else {
          sorted = myData.sort(
            (a, b) =>
              // @ts-ignore
              a.financial?.last24h.quote_volume -
              // @ts-ignore
              b.financial?.last24h.quote_volume,
          );
        }

        for (let index = 0 * 10; index < sorted.length; index++) {
          setData(prv => {
            return [...prv, sorted[index]];
          });
          // setSortedData(prv => {
          //   return [...prv, sorted[index]];
          // });
        }
        break;
      case '24h Chg':
        if (direction === 'none' || direction === 'up') {
          sorted = myData.sort(
            (a, b) =>
              // @ts-ignore
              b.financial?.last24h.quote_volume -
              // @ts-ignore
              a.financial?.last24h.quote_volume,
          );
        } else {
          sorted = myData.sort(
            (a, b) =>
              // @ts-ignore
              a.financial?.last24h.quote_volume -
              // @ts-ignore
              b.financial?.last24h.quote_volume,
          );
        }
        for (let index = 0 * 10; index < sorted.length; index++) {
          setData(prv => {
            return [...prv, sorted[index]];
          });
          // setSortedData(prv => {
          //   return [...prv, sorted[index]];
          // });
        }
        break;
    }
  };

  const filterByMarketValue = (
    data: marketDatatype[],
    filter: 'UP' | 'DOWN',
  ) => {
    let sortedList: marketDatatype[] = [];
    switch (filter) {
      case 'UP':
        sortedList = data.sort(
          (a, b) =>
            //@ts-ignore
            b.financial?.last24h.quote_volume -
            //@ts-ignore
            a.financial?.last24h.quote_volume,
        );
        return setData(sortedList);
      case 'DOWN':
        sortedList = data.sort(
          (a, b) =>
            //@ts-ignore
            a.financial?.last24h.quote_volume -
            //@ts-ignore
            b.financial?.last24h.quote_volume,
        );
        return setData(sortedList);
      default:
        return null;
    }
  };

  const filterByName = (data: marketDatatype[], filter: 'UP' | 'DOWN') => {
    let sortedList: marketDatatype[] = [];
    switch (filter) {
      case 'UP':
        sortedList = data.sort((x, y) => {
          const lowercaseX = x.name.en.split('/')[0].toLowerCase();
          const lowercaseY = y.name.en.split('/')[0].toLowerCase();

          if (lowercaseX < lowercaseY) {
            return -1;
          } else if (lowercaseX > lowercaseY) {
            return 1;
          } else {
            return 0;
          }
        });
        return setData(sortedList);
      case 'DOWN':
        sortedList = data.sort((x, y) => {
          const lowercaseX = x.name.en.split('/')[0].toLowerCase();
          const lowercaseY = y.name.en.split('/')[0].toLowerCase();

          if (lowercaseY < lowercaseX) {
            return -1;
          } else if (lowercaseY > lowercaseX) {
            return 1;
          } else {
            return 0;
          }
        });
        return setData(sortedList);

      default:
        return null;
    }
    sortedList = data.sort((x, y) => {
      const lowercaseX = x.name.en.split('/')[0].toLowerCase();
      const lowercaseY = y.name.en.split('/')[0].toLowerCase();

      if (lowercaseX < lowercaseY) {
        return -1;
      } else if (lowercaseX > lowercaseY) {
        return 1;
      } else {
        return 0;
      }
    });
    setData(sortedList);
  };

  const filterByPrice = (data: marketDatatype[], filter: 'UP' | 'DOWN') => {
    let sortedList: marketDatatype[] = [];
    switch (filter) {
      case 'UP':
        sortedList = data.sort(
          (a, b) =>
            //@ts-ignore
            b.financial?.last24h.quote_volume -
            //@ts-ignore
            a.financial?.last24h.quote_volume,
        );
        return setData(sortedList);
      case 'DOWN':
        sortedList = data.sort(
          (a, b) =>
            //@ts-ignore
            a.financial?.last24h.quote_volume -
            //@ts-ignore
            b.financial?.last24h.quote_volume,
        );
        return setData(sortedList);
      default:
        return null;
    }
  };

  const filterByChanges = (data: marketDatatype[], filter: 'UP' | 'DOWN') => {
    let sortedList: marketDatatype[] = [];
    switch (filter) {
      case 'UP':
        sortedList = data.sort(
          (a, b) =>
            //@ts-ignore
            b.financial?.last24h.change_percent -
            //@ts-ignore
            a.financial?.last24h.change_percent,
        );
        return setData(sortedList);
      case 'DOWN':
        sortedList = data.sort(
          (a, b) =>
            //@ts-ignore
            a.financial?.last24h.change_percent -
            //@ts-ignore
            b.financial?.last24h.change_percent,
        );
        return setData(sortedList);
      default:
        return null;
    }
  };

  function genFloorRand(min: number, max: number, decimalPlaces: number) {
    var rand = Math.random() * (max - min) + min;
    var power = Math.pow(10, decimalPlaces);
    return Math.floor(rand * power) / power;
  }

  const updater = React.useCallback(() => {
    let i = [...data];
    updateParams(
      i,
      Math.round(Math.random() * (100000000 - 1000000 + 1) + 1000000) *
        (Math.round(Math.random()) ? 1 : -1),
      Math.round(Math.random() * (500 - 200 + 1) + 500) *
        (Math.round(Math.random()) ? 1 : -1),
      genFloorRand(0, 3, 4) * (Math.round(Math.random()) ? 1 : -1),
    );
    setData(i);
  }, [data]);

  const updateParams = (
    arr: marketDatatype[],
    marketValue: number,
    price: number,
    changes: number,
  ) => {
    for (let index = 0; index < data.length; index++) {
      let i_1 = {...arr[index]};
      i_1.financial !== null
        ? (i_1.financial.last24h.quote_volume =
            i_1.financial.last24h.quote_volume + marketValue)
        : null;
      i_1.financial !== null
        ? (i_1.financial.last24h.close = i_1.financial.last24h.close + price)
        : null;
      i_1.financial !== null
        ? (i_1.financial.last24h.change_percent =
            i_1.financial.last24h.change_percent + changes)
        : null;
      arr[index] = i_1;
    }
  };

  return {
    data,
    sortedData,
    page,
    isLoading,
    theme,
    filter,
    filtering,
    setData,
    setSortedData,
    setLoading,
    setFilter,
    setPage,
    touch,
    setTouch,
    fetchData,
    updater,
    navigation,
    filterByMarketValue,
    filterByName,
    filterByPrice,
    filterByChanges,
    searchData,
    setSearchData,
    AtoZ,
    pSort,
    setAtoZ,
    setPSort,
    mvSort,
    chSort,
    setMvSort,
    setChSort,
  };
};
