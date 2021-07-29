import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors, icons} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  text: String;
};

const Header = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>튜티</Text>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingTop: 10,
    height: 50,
    alignItems: 'center',
  },
  text: {fontSize: 20, fontFamily: fonts.Bold},
});
