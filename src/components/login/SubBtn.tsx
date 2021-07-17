import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts, colors} from '../../constants';

type Props = {
  text: String;
  onPress: () => void;
};

const LoginIntroBtn = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress}>
      <Text style={styles.text}>{text}</Text>
    </TouchableOpacity>
  );
};

export default LoginIntroBtn;

const styles = StyleSheet.create({
  text: {fontFamily: fonts.medium, color: colors.gray, fontSize: 14},
});
