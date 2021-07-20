import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts, colors} from '../../constants';

type Props = {
  title: String;
  onPress: () => void;
};

const LoginIntroBtn = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Text style={styles.text}>{title}</Text>
    </TouchableOpacity>
  );
};

export default LoginIntroBtn;

const styles = StyleSheet.create({
  text: {fontFamily: fonts.medium, color: colors.gray, fontSize: 14},
});
