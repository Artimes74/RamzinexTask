import {StackNavigationProp} from '@react-navigation/stack';

export type routeStackParams = {
  home: undefined;
  coin: {coin: marketDatatype};
  profile: undefined;
};
export type themeType = 'dark' | 'light';
export type filtersType = 'Name' | '24h Chg' | 'Price' | 'M.V';

export type marketListType = {
  data: {
    amount_step: number;
    base_currency_id: number;
    base_currency_symbol: {en: string; fa: string};
    base_precision: number;
    buy: number | string;
    crypto_box: number;
    financial: {
      last24h: {
        base_volume: number;
        change_percent: number;
        close: number;
        highest: number;
        lowest: number;
        open: number;
        quote_volume: number;
      };
    } | null;
    icon: string;
    logo: string;
    name: {en: string; fa: string};
    pair_id: number;
    price_precision: number;
    price_step: number;
    quote_currency_id: number;
    quote_currency_symbol: {en: string; fa: string};
    quote_precision: number;
    sell: number | string;
    show_order: number;
    tv_symbol: {international: string; ramzinex: string};
    url_name: string;
    web_link: string;
  }[];
  status: number;
};

export type marketDatatype = {
  // id: number;
  amount_step: number;
  base_currency_id: number;
  base_currency_symbol: {en: string; fa: string};
  base_precision: number;
  buy: number | string;
  crypto_box: number;
  financial: {
    last24h: {
      base_volume: number;
      change_percent: number;
      close: number;
      highest: number;
      lowest: number;
      open: number;
      quote_volume: number;
    };
  } | null;
  icon: string;
  logo: string;
  name: {en: string; fa: string};
  pair_id: number;
  price_precision: number;
  price_step: number;
  quote_currency_id: number;
  quote_currency_symbol: {en: string; fa: string};
  quote_precision: number;
  sell: number | string;
  show_order: number;
  tv_symbol: {international: string; ramzinex: string};
  url_name: string;
  web_link: string;
};

export type appBarType = {
  appBarProps:
    | {
        searchBox:
          | {
              data: marketDatatype[];
              setData: React.Dispatch<React.SetStateAction<marketDatatype[]>>;
              touch: boolean;
              setTouch: React.Dispatch<React.SetStateAction<boolean>>;
            }
          | false;
        back:
          | {
              text: string;
            }
          | false;
        profile: boolean;
      }
    | false;

  theme: 'dark' | 'light';
};

export type cryptoType = {
  coin: marketDatatype;
  index: number;
  theme: 'light' | 'dark';
  navigation: StackNavigationProp<routeStackParams, 'home'>;
};

export type filterScreenType = {
  theme: 'dark' | 'light';
  filter: 'Name' | '24h Chg' | 'Price' | 'M.V';
  data: marketDatatype[];
  setFilter: React.Dispatch<React.SetStateAction<filtersType>>;
  filterByMarketValue: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void;
  filterByPrice: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void;
  filterByChanges: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void;
  filterByName: (data: marketDatatype[], filter: 'UP' | 'DOWN') => void;
  AtoZ: 'UP' | 'DOWN';
  pSort: 'UP' | 'DOWN';
  mvSort: 'UP' | 'DOWN';
  chSort: 'UP' | 'DOWN';
  setAtoZ: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>;
  setPSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>;
  setMvSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>;
  setChSort: React.Dispatch<React.SetStateAction<'UP' | 'DOWN'>>;
};

export type marketListScreenType = {
  theme: 'dark' | 'light';
  data: marketDatatype[];
  page: number;
  isLoading: boolean;
  setLoading: React.Dispatch<React.SetStateAction<boolean>>;
  setPage: React.Dispatch<React.SetStateAction<number>>;
  navigation: StackNavigationProp<routeStackParams, 'home'>;
  fetchData: () => void;
};

export type searchBoxType = {
  theme: 'dark' | 'light';
  data: marketDatatype[];
  setData: React.Dispatch<React.SetStateAction<marketDatatype[]>>;
  touch: boolean;
  setTouch: React.Dispatch<React.SetStateAction<boolean>>;
};

export type searchScreenType = {
  theme: 'dark' | 'light';
  navigation: StackNavigationProp<routeStackParams, 'home'>;
  data: marketDatatype[];
};
