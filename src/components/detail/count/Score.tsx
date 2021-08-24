import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {score: string};

const Score = ({score}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{score}</Text>
    </View>
  );
};

export default Score;

var styles = StyleSheet.create({
  container: {
    height: 50,
    justifyContent: 'center',
  },
  text: {
    fontFamily: fonts.montserrat_700,
    fontSize: 40,
    color: colors.main,
  },
});
