import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {colors, icons} from '../../constants';

interface ITab {
  isFocused: boolean;
  index: number;
  label: any;
  onPress: () => void;
}

export default function BottomTab({isFocused, index, label, onPress}: ITab) {
  const icon = [
    {index: 0, icon: isFocused ? icons.home_selected : icons.home_unselected},
    {
      index: 1,
      icon: isFocused ? icons.free_board_selected : icons.free_board_unselected,
    },
    {index: 2, icon: isFocused ? icons.chat_selected : icons.chat_unselected},
    {
      index: 3,
      icon: isFocused ? icons.my_page_selected : icons.my_page_unselected,
    },
  ];

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={() => onPress()}>
      <WithLocalSvg asset={icon[index].icon} />
      <Text
        style={[
          styles.text,
          isFocused ? {color: colors.main} : {color: colors.light_gray},
        ]}>
        {label}
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  text: {fontSize: 12, marginTop: 1},
});
