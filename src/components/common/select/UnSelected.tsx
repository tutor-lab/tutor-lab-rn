import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../constants';

type Props = {
  text: string;
};

const UnSelected = ({text}: Props) => {
  return (
    <View>
      <Text style={[fonts[500], styles.unSelected]}>{text}</Text>
    </View>
  );
};
export default UnSelected;

const styles = StyleSheet.create({
  unSelected: {fontSize: 16, color: colors.light_gray},
});
