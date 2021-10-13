import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, icons} from '../../constants';
import {Line} from '../common';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  list: {id: number; title: string; navigation: string; lastIdx: boolean};
  onPress: any;
};

const NaviList = ({list, onPress}: Props) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={onPress}>
        <View style={styles.left}>
          <Text style={[fonts[400], styles.title]}>{list.title}</Text>
        </View>
        <View style={styles.right}>
          <WithLocalSvg asset={icons.outlined_right} />
        </View>
      </TouchableOpacity>
      {!list.lastIdx && <Line />}
    </View>
  );
};

export default NaviList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 15,
    flexDirection: 'row',
  },
  left: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  right: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  title: {fontSize: 14},
});
