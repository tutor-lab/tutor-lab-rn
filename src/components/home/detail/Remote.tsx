import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';

import {fonts} from '../../../constants';

type Props = {remote: string[]};

const Remote = ({remote}: Props) => {
  return (
    <>
      {remote.map(text => (
        <View key={text} style={styles.tag}>
          <Text style={styles.text}>{text}</Text>
        </View>
      ))}
    </>
  );
};

export default Remote;

const styles = StyleSheet.create({
  tag: {
    height: '100%',
    justifyContent: 'center',
    borderRadius: 6,
    paddingHorizontal: 7,
    marginRight: 8,
    backgroundColor: 'rgba(89, 195, 99, 0.15)',
  },
  text: {
    fontFamily: fonts.montserrat_600,
    color: '#59C463',
    fontSize: 12,
    textAlignVertical: 'center',
  },
});
