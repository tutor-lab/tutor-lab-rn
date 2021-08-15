import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../../constants';

type Props = {
  text: string;
};

const Selected = ({text}: Props) => {
  return (
    <>
      <Text style={[fonts[700], styles.selected]}>{text}</Text>
      <View style={styles.underline} />
    </>
  );
};
export default Selected;

const styles = StyleSheet.create({
  selected: {zIndex: 1, fontSize: 16, color: colors.sub},
  underline: {
    marginTop: -7,
    zIndex: 2,
    backgroundColor: 'rgba(101, 149, 244, 0.4)',
    height: 8,
    width: 66,
  },
});
