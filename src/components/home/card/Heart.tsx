import React from 'react';
import 'react-native-gesture-handler';
import {Image, StyleSheet, Text} from 'react-native';

import {colors, icons, fonts} from '../../../constants';

type Props = {heart: number};

const Heart = ({heart}: Props) => {
  return (
    <>
      <Image
        source={icons.heart_red}
        resizeMode="contain"
        style={styles.heart}
      />
      <Text style={styles.count}> {heart}</Text>
    </>
  );
};
export default Heart;

const styles = StyleSheet.create({
  heart: {height: 13, width: 13},
  count: {
    fontFamily: fonts.montserrat_400,
    fontSize: 12.5,
    color: colors.light_gray,
  },
});
