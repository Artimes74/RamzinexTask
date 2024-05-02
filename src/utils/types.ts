export type routeStackParams = {
  home: undefined;
  coin: {coin: marketDatatype};
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
