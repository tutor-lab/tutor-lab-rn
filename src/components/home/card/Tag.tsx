import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';

import {fonts} from '../../../constants';

const Tag = () => {
  return (
    <View style={styles.container}>
      <View style={styles.tag}>
        <Text style={styles.text}>ONLINE</Text>
      </View>
    </View>
  );
};
export default Tag;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 19,
    marginTop: 16,
  },
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
