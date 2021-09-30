import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';
import {Line} from '../common';

type Props = {
  title: String;
};

const Btn_Big = ({title}: Props) => {
  return (
    <View>
      <View style={styles.container}>
        <Text style={[fonts[700], styles.text]}>{title}</Text>
      </View>
      <Line height={2} color={colors.main} />
    </View>
  );
};

export default Btn_Big;

const styles = StyleSheet.create({
  container: {paddingTop: 25, paddingBottom: 6},
  text: {fontSize: 15, color: colors.main},
});
