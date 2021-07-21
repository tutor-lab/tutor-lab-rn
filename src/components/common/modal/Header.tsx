import React from 'react';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';

import {fonts} from '../../../constants';

type Props = {
  onPress: () => void;
};

const Header = ({onPress}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.btn} onPress={onPress}>
        <Text style={styles.text}>X</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    height: 30,
    alignItems: 'flex-end',
    width: '100%',
  },
  btn: {
    height: '100%',
    width: 100,
    alignItems: 'flex-end',
  },
  text: {
    fontFamily: fonts.regular,
    color: '#9A9A9A',
    fontWeight: '700',
    fontSize: 16,
  },
});
