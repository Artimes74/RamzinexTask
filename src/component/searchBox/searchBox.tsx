import {Pressable, StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import {useTheme} from '../../assets/config/theme';
import SearchIcon from '../../assets/icons/searchIcon';
import {marketDatatype, searchBoxType} from '../../utils/types';
import {useSearchBox} from './useSearchBox';
import {searchBoxStyle} from './style';

type Props = searchBoxType;

const SearchBox = (props: Props) => {
  const {theme, data, setData, touch, setTouch} = props;
  const debounce = (callBack: any, fun2: any, delay: number) => {
    let timeOut: any = null;
    //@ts-ignore
    return (...args) => {
      fun2(...args);
      clearTimeout(timeOut);
      timeOut = setTimeout(() => {
        callBack(...args);
      }, delay);
    };
  };
  const findCrypto = (txt: string) => {
    if (txt !== '') {
      const filteredData = data.filter(coin => {
        return coin.name.en.split('-')[0].includes(txt.toLocaleLowerCase());
      });
      setData(filteredData);
    } else {
      setData([]);
    }
  };

  const autoSetText = (txt: string) => {
    setText(txt);
  };

  const debounceSearch = debounce(findCrypto, autoSetText, 300);

  const {inputRef, setText, text} = useSearchBox();

  React.useEffect(() => {
    if (touch) {
      inputRef?.current.focus();
    } else {
      inputRef?.current.blur();
    }
  }, [touch]);

  return (
    <View style={searchBoxStyle.container}>
      <View
        style={[
          searchBoxStyle.box,
          {backgroundColor: useTheme(theme).systemColor.thirdColor},
        ]}>
        <View style={searchBoxStyle.searchIconContainer}>
          <SearchIcon
            width={'70%'}
            height={'70%'}
            color={useTheme(theme).systemColor.text}
          />
        </View>
        <TextInput
          ref={inputRef}
          style={[
            searchBoxStyle.input,
            {color: useTheme(theme).systemColor.text},
          ]}
          placeholderTextColor={useTheme(theme).systemColor.nute}
          value={text}
          onChangeText={debounceSearch}
          placeholder="search for a crypto"
        />
      </View>
      <Pressable
        onPress={() => {
          setTouch(true);
          console.log(touch);
        }}
        style={searchBoxStyle.cover}
      />
    </View>
  );
};

export default SearchBox;
