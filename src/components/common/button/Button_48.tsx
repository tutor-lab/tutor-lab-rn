import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../constants';

type Props = {
  text: string;
  onPress: () => void;
};

const Button_48 = ({text, onPress}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}>
      <View style={styles.btn_box}>
        <Text style={[fonts[500], styles.btn_text]}>{text}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button_48;

const styles = StyleSheet.create({
  container: {
    height: 48,
    width: '100%',
  },
  btn_box: {
    borderRadius: 8,
    backgroundColor: colors.main,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  btn_text: {color: colors.white, fontSize: 15},
});
