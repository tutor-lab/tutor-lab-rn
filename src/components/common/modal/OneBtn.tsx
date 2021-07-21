import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors, fonts, width} from '../../../constants';

type Props = {
  text: string;
  onPress: () => void;
};

const OneBtn = ({onPress, text}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.modalBtn}
      onPress={onPress}>
      <Text style={styles.modalBtnText}>{text}</Text>
    </TouchableOpacity>
  );
};

export default OneBtn;

const styles = StyleSheet.create({
  modalBtn: {
    height: 52,
    borderRadius: 5,
    width: width * 233,
    backgroundColor: colors.loginBtn,
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalBtnText: {
    fontFamily: fonts.medium,
    fontSize: 16,
    color: colors.white,
    fontWeight: '400',
  },
});
