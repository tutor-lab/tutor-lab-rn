import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../../constants';

type Props = {discount: number};
const Percent = ({discount}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{discount}</Text>
      <Text style={styles.text}>%{'  '}</Text>
    </View>
  );
};
export default Percent;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  text: {
    fontFamily: fonts.montserrat_600,
    fontSize: 14,
    color: colors.red,
  },
});
