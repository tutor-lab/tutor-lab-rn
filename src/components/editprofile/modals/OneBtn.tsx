import React from 'react';
import {Text, View, TouchableOpacity, StyleSheet} from 'react-native';

import {colors, width, fonts} from '../../../constants';

type Props = {
  text: string;
  onPress: () => void;
};

const OneBtn = ({onPress, text}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.modalBtn} onPress={onPress}>
        <Text style={[fonts[400], styles.text]}>{text}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default OneBtn;

const styles = StyleSheet.create({
  container: {width: '100%', paddingHorizontal: width * 57},
  modalBtn: {
    width: '100%',
    paddingVertical: 12,
    borderRadius: 5,
    backgroundColor: colors.main,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 15,
    color: colors.white,
  },
});
