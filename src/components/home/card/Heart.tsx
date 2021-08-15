import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, StyleSheet, Text} from 'react-native';

import {colors, icons, fonts} from '../../../constants';

const Heart = () => {
  return (
    <View style={styles.container}>
      <Image
        source={icons.heart_red}
        resizeMode="contain"
        style={styles.heart}
      />
      <Text style={styles.count}> 56</Text>
    </View>
  );
};
export default Heart;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
  heart: {height: 13, width: 13},
  count: {
    fontFamily: fonts.montserrat_400,
    fontSize: 12.5,
    color: colors.light_gray,
  },
});
