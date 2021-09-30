import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, TouchableOpacity, TextInput} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, fonts, icons} from '../../constants';

type Props = React.ComponentProps<typeof TextInput>;
const SearchBar = ({...props}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.textInputWrapper}>
        <TextInput
          placeholderTextColor={colors.light_gray}
          style={[fonts[400], {fontSize: 14}]}
          placeholder={'강의명·언어·튜터를 검색하세요'}
          {...props}
        />
      </View>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => console.log('서치바')}
        style={styles.icon}>
        <WithLocalSvg asset={icons.search} />
      </TouchableOpacity>
    </View>
  );
};
export default SearchBar;

const styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    backgroundColor: colors.bg_color,
    width: '100%',
    height: 48,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textInputWrapper: {flex: 1},
  icon: {width: 44, alignItems: 'flex-end'},
});
