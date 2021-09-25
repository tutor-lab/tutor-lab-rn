import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {fonts, colors, width, height} from '../../constants';

type Props = {
  backgroundColor: string;
  password: bool;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const FormInput = ({backgroundColor, password, value, placeholder, onChangeText}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <TextInput
        secureTextEntry={password}
        placeholderTextColor={colors.grey}
        style={[fonts[400], styles.input]}
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

export default FormInput;

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 10,
    width: width * 290,
    justifyContent: 'center',
    marginBottom: height * 10,
    paddingLeft: width * 12,
  },
  input: {
    color: colors.black,
    fontSize: height * 16,
  },
});
