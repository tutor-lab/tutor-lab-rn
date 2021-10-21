import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, TextInput} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, fonts, icons, images} from '../../constants';

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

const SearchBarNoLogo = ({value, onChangeText}: Props) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.icon}>
          <WithLocalSvg asset={icons.search_main} />
        </View>
        <View style={styles.text}>
          <TextInput
            placeholderTextColor={colors.light_gray}
            style={[fonts[400], styles.input]}
            value={value}
            placeholder={'강의명·언어·튜터를 검색하세요'}
            onChangeText={onChangeText}
          />
        </View>
      </View>
    </>
  );
};
export default SearchBarNoLogo;

const styles = StyleSheet.create({
  container: {
    marginTop: -10,
    height: 52,
    width: '100%',
    borderColor: colors.main,
    backgroundColor: colors.white,
    borderRadius: 8,
    borderWidth: 1,
    flexDirection: 'row',
    zIndex: 2,
    position: 'relative',
  },
  image: {
    alignItems: 'flex-end',
    marginRight: 30,
    zIndex: 1,
    position: 'relative',
  },
  icon: {flex: 1, alignItems: 'flex-end', justifyContent: 'center'},
  text: {flex: 7, paddingRight: 10},
  input: {
    color: colors.black,
    paddingLeft: 10,
    fontSize: 16,
    textAlignVertical: 'center',
    alignItems: 'center',
  },
});
