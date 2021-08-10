import React from 'react';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors, width} from '../../constants';

type Props = {
  image: string;
};

const Input = () => {
  return (
    <TouchableOpacity activeOpacity={1} style={styles.container}>
      <Image
        source={require('../../assets/images/card_image.png')}
        resizeMode="cover"
        style={styles.image}
      />
    </TouchableOpacity>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    height: 70,
    width: 70,
  },
  image: {height: 70, width: 70, borderRadius: 100 / 2},
});
