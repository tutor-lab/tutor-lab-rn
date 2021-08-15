import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

const Tutor = () => {
  return (
    <View style={styles.container}>
      <Text style={[fonts[400], styles.text]}>튜터{'  '}</Text>
      <Text style={[fonts[400], styles.text]}>김하나</Text>
    </View>
  );
};
export default Tutor;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', marginTop: 8},
  text: {fontSize: 13, color: colors.light_gray},
});
