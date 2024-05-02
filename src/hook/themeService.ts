import {View, Text, useColorScheme} from 'react-native';

const ThemeService = (userTheme: 'light' | 'dark') => {
  const theme = useColorScheme();
  return theme === userTheme ? theme : userTheme;
};

export default ThemeService;
