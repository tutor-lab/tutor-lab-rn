import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WithLocalSvg} from 'react-native-svg/src';

import {fonts, colors, icons} from '../../constants';

type Props = {
  text: String;
  onPress: () => void;
};

const Chip = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={onPress}>
      <WithLocalSvg asset={icons.category_menu} />
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Chip;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 29,
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: 11,
    borderColor: colors.silver,
    borderWidth: 1,
  },
  text: {
    marginLeft: 10,
    fontFamily: fonts.medium,
    color: colors.dim_gray,
  },
});
