import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import {fonts, colors, width, height} from '../../constants';

type Props = {
  backgroundColor: string;
  value: string;
  placeholder: string;
  onChangeText: (text: string) => void;
};

const FormInput = ({backgroundColor, value, placeholder, onChangeText}: Props) => {
  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <TextInput
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
  },
  input: {
    color: colors.black,
    paddingLeft: 10,
    fontSize: 16,
  },
});
