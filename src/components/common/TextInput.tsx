import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {fonts, colors, width} from '../../constants';

type Props = {
  backgroundColor: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const Input = ({backgroundColor, value, placeholder, onChangeText}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <TextInput
        placeholderTextColor={colors.gray}
        style={styles.input}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 5,
    width: width * 290,
    justifyContent: 'center',
  },
  input: {
    color: colors.black,
    paddingLeft: 10,
    fontFamily: fonts.regular,
    fontSize: 16,
  },
});
