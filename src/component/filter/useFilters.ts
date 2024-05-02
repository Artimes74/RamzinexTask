import React from 'react';
import {filtersType, marketDatatype} from '../../utils/types';

export const useFilters = () => {
  const sortBy = (
    item: string,
    byName: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
    byMarket: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
    byPrice: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
    byChanges: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
    data: marketDatatype[],
    setFilter: React.Dispatch<React.SetStateAction<filtersType>>,
    AtoZ: 'UP' | 'DOWN',
    pSort: 'UP' | 'DOWN',
    mvSort: 'UP' | 'DOWN',
    chSort: 'UP' | 'DOWN',
    setAtoZ: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
    setPSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
    setMvSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
    setChSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
  ) => {
    switch (item) {
      case 'Name':
        setFilter('Name');
        return funcSortName(AtoZ, setAtoZ, data, byName);

      case 'M.V':
        setFilter('M.V');
        return funcSortMarket(mvSort, setMvSort, data, byMarket);

      case 'Price':
        setFilter('Price');
        return funcSortPrice(pSort, setPSort, data, byPrice);

      case '24h Chg':
        setFilter('24h Chg');
        return funcSortChanges(chSort, setChSort, data, byChanges);

      default:
        return null;
    }
  };

  const funcSortName = (
    AtoZ: 'UP' | 'DOWN',
    setAtoZ: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
    data: marketDatatype[],
    byName: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
  ) => {
    if (AtoZ === 'UP') {
      setAtoZ('DOWN');
      return byName(data, 'UP');
    } else {
      setAtoZ('UP');
      return byName(data, 'DOWN');
    }
  };

  const funcSortPrice = (
    pSort: 'UP' | 'DOWN',
    setPSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
    data: marketDatatype[],
    byPrice: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
  ) => {
    if (pSort === 'UP') {
      setPSort('DOWN');
      return byPrice(data, 'UP');
    } else {
      setPSort('UP');
      return byPrice(data, 'DOWN');
    }
  };

  const funcSortMarket = (
    mvSort: 'UP' | 'DOWN',
    setMvSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
    data: marketDatatype[],
    byMarket: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
  ) => {
    if (mvSort === 'UP') {
      setMvSort('DOWN');
      return byMarket(data, 'UP');
    } else {
      setMvSort('UP');
      return byMarket(data, 'DOWN');
    }
  };

  const funcSortChanges = (
    chSort: 'UP' | 'DOWN',
    setChSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>,
    data: marketDatatype[],
    byChanges: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void,
  ) => {
    if (chSort === 'UP') {
      setChSort('DOWN');
      return byChanges(data, 'UP');
    } else {
      setChSort('UP');
      return byChanges(data, 'DOWN');
    }
  };

  return {
    sortBy,
  };
};
