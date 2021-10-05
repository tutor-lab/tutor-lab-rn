import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../constants';

type Props = {
  title: string;
  onPress: () => void;
};

const Button_Bottom = ({title, onPress}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.wrapper}>
        <Text style={[fonts[500], styles.text]}>{title}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default Button_Bottom;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: colors.main,
    height: 78,
  },
  wrapper: {
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: colors.white, fontSize: 15},
});
