import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WithLocalSvg} from 'react-native-svg/src';

import {fonts, icons} from '../../constants';

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
    borderColor: '#C2C2C2',
    borderWidth: 1,
  },
  text: {
    marginLeft: 10,
    fontFamily: fonts.medium,
    color: '#6A6A6A',
  },
});
