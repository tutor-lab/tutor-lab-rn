import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {title: string};
const Explain = ({title}: Props) => {
  return (
    <>
      <Text style={[fonts[400], styles.text]}>{title}</Text>
    </>
  );
};
export default Explain;

const styles = StyleSheet.create({
  text: {fontSize: 13, lineHeight: 19, color: colors.light_gray},
});
