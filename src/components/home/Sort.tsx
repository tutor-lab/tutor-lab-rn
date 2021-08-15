import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {fonts, icons, colors} from '../../constants';

type Props = {};

const Sort = ({}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.chip}>
        <WithLocalSvg asset={icons.sort} />
        <View style={styles.divider} />
        <Text style={[fonts[500], styles.text]}>인기순</Text>
      </TouchableOpacity>
    </View>
  );
};
export default Sort;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
  chip: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    flexDirection: 'row',
    height: 27,
    paddingHorizontal: 10,
    alignItems: 'center',
  },

  divider: {width: 4},
  text: {fontSize: 12},
});
