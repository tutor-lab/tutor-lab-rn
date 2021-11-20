import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {fonts, icons, colors} from '../../constants';

type Props = {};

const Sort = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={[fonts[700], styles.title]}>강의 후기</Text>
      </View>
      {/* <View style={styles.chip}>
        <TouchableOpacity activeOpacity={1} style={styles.box}>
          <WithLocalSvg asset={icons.sort} />
          <View style={styles.divider} />
          <Text style={[fonts[500], styles.sort]}>최신순</Text>
        </TouchableOpacity>
      </View> */}
    </View>
  );
};
export default Sort;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  title: {fontSize: 16, color: colors.sub},
  chip: {flex: 1, flexDirection: 'row', justifyContent: 'flex-end'},
  box: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    flexDirection: 'row',
    height: 27,
    paddingHorizontal: 10,
    alignItems: 'center',
  },
  divider: {width: 4},
  sort: {fontSize: 12, color: colors.gray},
});
