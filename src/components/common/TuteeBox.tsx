import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';

const TuteeBox = () => {
  return (
    <View style={styles.wrapper}>
      <Text style={[fonts[500], styles.text]}>튜티</Text>
    </View>
  );
};
export default TuteeBox;

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: 'rgba(101, 149, 244, 0.15)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {color: colors.main, fontSize: 12},
});
