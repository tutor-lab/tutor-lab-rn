import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';

type Props = {
  count: number;
};

const Count = ({count}: Props) => {
  return (
    <View style={styles.container}>
      <Text style={[styles.text, fonts[500]]}>총 </Text>
      <Text style={styles.text}>{count}</Text>
      <Text style={[styles.text, fonts[500]]}>개의 강의</Text>
    </View>
  );
};
export default Count;

const styles = StyleSheet.create({
  container: {flex: 1, flexDirection: 'row'},
  text: {fontFamily: fonts.montserrat_500, fontSize: 14, color: colors.sub},
});
