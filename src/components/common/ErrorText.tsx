import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../constants';

type Props = {text: string};

const EditInfoScreen = ({text}: Props) => {
  return <Text style={[fonts[400], styles.text]}>{text}</Text>;
};

export default EditInfoScreen;

const styles = StyleSheet.create({
  text: {fontSize: 12, color: colors.red},
});
