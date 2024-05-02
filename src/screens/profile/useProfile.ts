import React from 'react';
import {useAppSelector} from '../../hook/reduxHook';
import ThemeService from '../../hook/themeService';
import {useDispatch} from 'react-redux';

export const useProfile = () => {
  const appTheme = useAppSelector(state => state.reducers.userReducer.theme);
  const theme: 'dark' | 'light' = ThemeService(appTheme);
  const appLanguage = useAppSelector(
    state => state.reducers.userReducer.language,
  );
  const [lan, setLan] = React.useState<'en' | 'fa'>(appLanguage);
  const [them, setTheme] = React.useState<'dark' | 'light'>(appTheme);
  const refRBSheetLanguage = React.useRef<any>();
  const refRBSheetTheme = React.useRef<any>();
  const dispatch = useDispatch();
  return {
    theme,
    lan,
    them,
    refRBSheetLanguage,
    refRBSheetTheme,
    dispatch,
    setLan,
    setTheme,
  };
};
