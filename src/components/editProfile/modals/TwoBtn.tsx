import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {colors, fonts, width} from '../../../constants';

type Props = {
  textCancel: string;
  textOk: string;
  onPressCancel: () => void;
  onPressOk: () => void;
};

const TwoBtn = ({onPressCancel, onPressOk, textCancel, textOk}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.row}>
        <TouchableOpacity style={styles.button} onPress={onPressCancel}>
          <Text style={[fonts[400], styles.text]}>{textCancel}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.row}>
        <TouchableOpacity
          style={[styles.button, styles.btnRight]}
          onPress={onPressOk}>
          <Text style={[fonts[400], styles.text]}>{textOk}</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TwoBtn;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    flexDirection: 'row',
    paddingHorizontal: width * 57,
  },
  row: {flex: 1},
  button: {
    width: '90%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: colors.gray,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnRight: {backgroundColor: colors.main, alignSelf: 'flex-end'},
  text: {
    fontSize: 15,
    color: colors.white,
  },
});
