import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';

const TutorBox = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={[fonts[500], styles.text]}>튜터</Text>
    </View>
  );
};
export default TutorBox;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(238, 90, 90, 0.1)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: colors.red, fontSize: 12},
});
