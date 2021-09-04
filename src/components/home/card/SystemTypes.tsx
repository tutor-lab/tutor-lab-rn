import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';

import {fonts} from '../../../constants';

type Props = {systemTypes: {name: string; type: string}[]};

const SystemTypes = ({systemTypes}: Props) => {
  return (
    <>
      {systemTypes.map(data => (
        <View key={data.name} style={styles.tag}>
          <Text style={styles.text}>{data.type}</Text>
        </View>
      ))}
    </>
  );
};

export default SystemTypes;

const styles = StyleSheet.create({
  tag: {
    height: '100%',
    justifyContent: 'center',
    borderRadius: 21,
    paddingHorizontal: 7,
    marginRight: 8,
    backgroundColor: 'rgba(89, 195, 99, 0.15)',
  },
  text: {
    fontFamily: fonts.montserrat_600,
    color: '#59C463',
    fontSize: 11,
    textAlignVertical: 'center',
  },
});
