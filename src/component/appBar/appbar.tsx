import {Dimensions, Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import SearchBox from '../searchBox/searchBox';
import Back from '../../assets/icons/back';
import {useTheme} from '../../assets/config/theme';
import {StackNavigationProp} from '@react-navigation/stack';
import {appBarType, marketDatatype, routeStackParams} from '../../utils/types';
import {useNavigation} from '@react-navigation/native';
import {APP_BAR_SIZE} from '../../utils/constant';
import ProfileIcon from '../../assets/icons/profileIcon';
import {appBarStyles} from './styles';
const {width, height} = Dimensions.get('screen');

type Props = appBarType;

const AppBar = (props: Props) => {
  const {appBarProps, theme} = props;
  type navigationType = StackNavigationProp<routeStackParams>;
  const navigation = useNavigation<navigationType>();

  return (
    <View style={appBarStyles.appBar}>
      {appBarProps && appBarProps.searchBox ? (
        <SearchBox
          theme={theme}
          touch={appBarProps.searchBox.touch}
          setTouch={appBarProps.searchBox.setTouch}
          data={appBarProps.searchBox.data}
          setData={appBarProps.searchBox.setData}
        />
      ) : null}
      {appBarProps && appBarProps.back ? (
        <View style={appBarStyles.backContainer}>
          <Pressable
            onPress={() => {
              navigation.goBack();
            }}>
            <Back
              width={30}
              height={30}
              color={useTheme(theme).systemColor.text}
              rotation="90 deg"
            />
          </Pressable>
          <Text
            style={[
              appBarStyles.backText,
              {color: useTheme(theme).systemColor.text},
            ]}>
            {appBarProps.back.text}
          </Text>
        </View>
      ) : null}
      <View style={appBarStyles.profileContainer}>
        <>
          {appBarProps &&
          appBarProps.searchBox &&
          appBarProps.searchBox.touch ? (
            <Pressable
              onPress={() => {
                appBarProps.searchBox
                  ? appBarProps.searchBox.setTouch(false)
                  : null;
              }}>
              <Text
                style={[
                  appBarStyles.cancelText,
                  {color: useTheme(theme).systemColor.text},
                ]}>
                cancel
              </Text>
            </Pressable>
          ) : (
            <>
              {appBarProps && appBarProps.profile ? (
                <Pressable
                  style={appBarStyles.profileButton}
                  onPress={() => {
                    navigation.navigate('profile');
                  }}>
                  <ProfileIcon
                    width={'73%'}
                    height={'73%'}
                    color={useTheme(theme).systemColor.text}
                  />
                </Pressable>
              ) : null}
            </>
          )}
        </>
      </View>
    </View>
  );
};

export default AppBar;
