import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, icons} from '../../../constants';

type Props = {
  onPress: () => void;
};

const Heart = ({onPress}: Props) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={1}
      style={styles.container}>
      <View style={styles.heart_box}>
        <Image source={icons.heart_blank} />
        {/* <Image source={icons.heart_red} /> */}
      </View>
    </TouchableOpacity>
  );
};

export default Heart;

const styles = StyleSheet.create({
  container: {height: 48, width: 48},
  heart_box: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.bg_color,
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
