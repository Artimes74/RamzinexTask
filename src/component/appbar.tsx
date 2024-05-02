import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBox from './searchBox';
import Back from '../assets/icons/back';
import {useTheme} from '../assets/theme';
import ThemeService from '../services/themeService';
import {StackNavigationProp} from '@react-navigation/stack';
import {routeStackParams} from '../utils/types';
import {useNavigation} from '@react-navigation/native';
import {APP_BAR_SIZE} from '../utils/constant';
const {width, height} = Dimensions.get('screen');

type Props = {
  appBarProps:
    | {
        searchBox: boolean;
        back: boolean;
      }
    | false;
};

const AppBar = (props: Props) => {
  const {appBarProps} = props;
  type navigationType = StackNavigationProp<routeStackParams>;
  const navigation = useNavigation<navigationType>();
  return (
    <View style={styles.appBar}>
      {appBarProps && appBarProps.searchBox ? <SearchBox /> : null}
      {appBarProps && appBarProps.back ? (
        <View style={styles.backContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Back
              width={30}
              height={30}
              color={useTheme(ThemeService()).systemColor.text}
              rotation="90 deg"
            />
          </Pressable>
          <Text
            style={[
              styles.backText,
              {color: useTheme(ThemeService()).systemColor.text},
            ]}>
            Details
          </Text>
        </View>
      ) : null}
    </View>
  );
};

export default AppBar;

const styles = StyleSheet.create({
  appBar: {
    width,
    // height: APP_BAR_SIZE,
    height: '8%',
    paddingHorizontal: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  backContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingLeft: 10,
  },
  backText: {
    fontSize: 24,
    fontWeight: 'bold',
    marginHorizontal: 12,
  },
});
