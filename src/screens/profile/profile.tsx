import {
  Dimensions,
  Pressable,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import React from 'react';
import {useTheme} from '../../assets/config/theme';
import {APP_BAR_SIZE} from '../../utils/constant';
import AppBar from '../../component/appBar/appbar';
import RBSheet from 'react-native-raw-bottom-sheet';
import ArrowIcon from '../../assets/icons/arrow';
import Back from '../../assets/icons/back';
import CheckIcon from '../../assets/icons/checkIcon';
import {useDispatch} from 'react-redux';
import {setApplicationTheme} from '../../redux/reducer';
import {useAppSelector} from '../../hook/reduxHook';
import {useProfile} from './useProfile';
import {profileStyles} from './style';
const {width, height} = Dimensions.get('screen');

type Props = {};

const Profile = (props: Props) => {
  const {
    theme,
    dispatch,
    lan,
    refRBSheetLanguage,
    refRBSheetTheme,
    them,
    setLan,
    setTheme,
  } = useProfile();

  return (
    <SafeAreaView
      style={[
        profileStyles.container,
        {backgroundColor: useTheme(theme).systemColor.backgroundColor},
      ]}>
      <View style={profileStyles.graben}>
        <AppBar
          theme={theme}
          appBarProps={{
            back: {
              text: 'Profile',
            },
            profile: false,
            searchBox: false,
          }}
        />

        <Pressable
          onPress={() => {
            refRBSheetTheme.current.open();
          }}
          style={profileStyles.choiceFiled}>
          <Text
            style={[
              profileStyles.titleText,
              {color: useTheme(theme).systemColor.text},
            ]}>
            Theme
          </Text>
          <View style={profileStyles.valueContainer}>
            <Text
              style={[
                profileStyles.value,
                {color: useTheme(theme).systemColor.nute},
              ]}>
              {them}
            </Text>
            <Back
              width={22}
              height={22}
              rotation={'270 deg'}
              color={useTheme(theme).systemColor.nute}
            />
          </View>
        </Pressable>
        <Pressable
          onPress={() => {
            refRBSheetLanguage.current.open();
          }}
          style={profileStyles.choiceFiled}>
          <Text
            style={[
              profileStyles.titleText,
              {color: useTheme(theme).systemColor.text},
            ]}>
            Language
          </Text>
          <View style={profileStyles.valueContainer}>
            <Text
              style={[
                profileStyles.value,
                {color: useTheme(theme).systemColor.nute},
              ]}>
              {lan}
            </Text>
            <Back
              width={22}
              height={22}
              rotation={'270 deg'}
              color={useTheme(theme).systemColor.nute}
            />
          </View>
        </Pressable>
      </View>
      <RBSheet
        ref={refRBSheetTheme}
        height={250}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            backgroundColor: useTheme(theme).systemColor.bottomSheetbg,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View style={[profileStyles.bottomSheetContainer]}>
          <Pressable
            style={profileStyles.SelectedFiled}
            onPress={() => {
              refRBSheetTheme.current.close();
              setTheme('light');
              dispatch(setApplicationTheme('light'));
            }}>
            {them === 'light' ? (
              <CheckIcon
                width={20}
                height={20}
                color={useTheme(theme).systemColor.primary}
              />
            ) : null}
            <Text
              style={[
                profileStyles.choice,
                {
                  color: useTheme(theme).systemColor.text,
                  marginHorizontal: them === 'light' ? 20 : 40,
                },
              ]}>
              light
            </Text>
          </Pressable>
          <Pressable
            style={profileStyles.SelectedFiled}
            onPress={() => {
              refRBSheetTheme.current.close();
              setTheme('dark');
              dispatch(setApplicationTheme('light'));
            }}>
            {them === 'dark' ? (
              <CheckIcon
                width={20}
                height={20}
                color={useTheme(theme).systemColor.primary}
              />
            ) : null}
            <Text
              style={[
                profileStyles.choice,
                {
                  color: useTheme(theme).systemColor.text,
                  marginHorizontal: them === 'dark' ? 20 : 40,
                },
              ]}>
              dark
            </Text>
          </Pressable>
        </View>
      </RBSheet>
      <RBSheet
        ref={refRBSheetLanguage}
        height={250}
        customStyles={{
          wrapper: {
            backgroundColor: 'transparent',
          },
          container: {
            backgroundColor: useTheme(theme).systemColor.bottomSheetbg,
            borderTopRightRadius: 16,
            borderTopLeftRadius: 16,
          },
        }}
        customModalProps={{
          animationType: 'slide',
          statusBarTranslucent: true,
        }}
        customAvoidingViewProps={{
          enabled: false,
        }}>
        <View style={[profileStyles.bottomSheetContainer]}>
          <Pressable
            style={profileStyles.SelectedFiled}
            onPress={() => {
              refRBSheetLanguage.current.close();
              setLan('fa');
            }}>
            {lan === 'fa' ? (
              <CheckIcon
                width={20}
                height={20}
                color={useTheme(theme).systemColor.primary}
              />
            ) : null}
            <Text
              style={[
                profileStyles.choice,
                {
                  color: useTheme(theme).systemColor.text,
                  marginHorizontal: lan === 'fa' ? 20 : 40,
                },
              ]}>
              Persian
            </Text>
          </Pressable>
          <Pressable
            style={profileStyles.SelectedFiled}
            onPress={() => {
              refRBSheetLanguage.current.close();
              setLan('en');
            }}>
            {lan === 'en' ? (
              <CheckIcon
                width={20}
                height={20}
                color={useTheme(theme).systemColor.primary}
              />
            ) : null}
            <Text
              style={[
                profileStyles.choice,
                {
                  color: useTheme(theme).systemColor.text,
                  marginHorizontal: lan === 'en' ? 20 : 40,
                },
              ]}>
              English
            </Text>
          </Pressable>
        </View>
      </RBSheet>
    </SafeAreaView>
  );
};

export default Profile;
