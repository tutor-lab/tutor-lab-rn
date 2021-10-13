import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

import {fonts, width} from '../../../constants';

type Props = {
  text: string;
};

const Title = ({text}: Props) => {
  return (
    <View style={[styles.container, {transform: [{rotate: '0.04deg'}]}]}>
      <Text style={[fonts[700], styles.text]}>{text}</Text>
    </View>
  );
};

export default Title;

const styles = StyleSheet.create({
  container: {width: '100%', marginBottom: 8, paddingHorizontal: width * 57},
  text: {
    textAlign: 'center',
    fontSize: 16,
  },
});
