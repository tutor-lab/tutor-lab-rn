import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {tutor: string};

const Tutor = ({tutor}: Props) => {
  return (
    <>
      <Text style={[fonts[400], styles.text]}>튜터{'  '}</Text>
      <Text style={[fonts[400], styles.text]}>{tutor}</Text>
    </>
  );
};
export default Tutor;

const styles = StyleSheet.create({
  text: {fontSize: 13, color: colors.light_gray},
});
