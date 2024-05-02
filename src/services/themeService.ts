import {View, Text, useColorScheme} from 'react-native';
import React from 'react';
import {themeType} from '../utils/types';

const ThemeService = () => {
  const theme = useColorScheme();
  return theme === 'dark' ? 'dark' : 'light';
};

export default ThemeService;
