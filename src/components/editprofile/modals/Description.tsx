import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

import {width, fonts} from '../../../constants';

type Props = {
  text: string;
};

const Description = ({text}: Props) => {
  return (
    <View style={[styles.container, {transform: [{rotate: '0.04deg'}]}]}>
      <Text style={[fonts[400], styles.text]}>{text}</Text>
    </View>
  );
};

export default Description;

const styles = StyleSheet.create({
  container: {width: '100%', marginBottom: 12, paddingHorizontal: width * 57},
  text: {
    textAlign: 'center',
    fontSize: 15,
    lineHeight: 17.9,
  },
});
