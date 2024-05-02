import {useAppSelector} from '../../hook/reduxHook';
import ThemeService from '../../hook/themeService';

export const useCoin = () => {
  const appTheme = useAppSelector(state => state.reducers.userReducer.theme);
  const theme: 'dark' | 'light' = ThemeService(appTheme);

  const divided = (digit: number) => {
    if (digit.toString().length < 7) {
      return `${(digit / 1000).toFixed(2).toString()}K`;
    } else if (digit.toString().length < 10) {
      return `${(digit / 1000000).toFixed(2).toString()}M`;
    } else {
      return `${(digit / 1000000000).toFixed(2).toString()}B`;
    }
  };

  return {
    theme,
    divided,
  };
};
