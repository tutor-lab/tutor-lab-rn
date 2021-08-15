import React from 'react';
import 'react-native-gesture-handler';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../constants';

type Props = {
  data: {
    id: number;
    text: string;
    isSelected: boolean;
  };
};

const Chip = ({data}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.container,
        data.isSelected ? styles.selected : styles.unSelected,
      ]}>
      <Text
        style={[
          fonts[500],
          data.isSelected ? styles.selectedText : styles.unSelectedText,
        ]}>
        {data.text}
      </Text>
    </TouchableOpacity>
  );
};
export default Chip;

const styles = StyleSheet.create({
  container: {
    height: 36,
    borderRadius: 36,
    justifyContent: 'center',
    paddingHorizontal: 12,
    marginRight: 8,
  },
  selected: {backgroundColor: colors.main},
  unSelected: {
    backgroundColor: colors.white,
    borderWidth: 1,
    borderColor: colors.line,
  },
  selectedText: {fontSize: 12, color: colors.white},
  unSelectedText: {fontSize: 12, color: colors.gray},
});
