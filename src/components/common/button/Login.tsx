import React from 'react';
import 'react-native-gesture-handler';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../constants';

type Props = {
  title: string;
  onPress: () => void;
  backgroundColor?: string;
  textColor?: string;
};

const Login = ({
  title,
  onPress,
  backgroundColor = colors.main,
  textColor = colors.white,
}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.button, {backgroundColor: backgroundColor}]}>
      <Text style={[fonts[700], styles.text, {color: textColor}]}>{title}</Text>
    </TouchableOpacity>
  );
};

export default Login;

const styles = StyleSheet.create({
  button: {
    width: '100%',
    borderRadius: 10,
    borderWidth: 1,
    paddingVertical: 13,
    borderColor: colors.main,
    backgroundColor: colors.main,
  },
  text: {
    textAlignVertical: 'center',
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 22,
    color: colors.white,
  },
});
