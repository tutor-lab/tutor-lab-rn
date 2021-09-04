import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {
  tag: string[];
};

const Step = ({tag}: Props) => {
  return (
    <>
      {tag.map(text => (
        <View key={text} style={styles.tag}>
          <Text style={[fonts[500], styles.tagText]}>{text}</Text>
        </View>
      ))}
    </>
  );
};

export default Step;

var styles = StyleSheet.create({
  tag: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white,
    height: 22,
    marginRight: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 12,
    color: colors.white,
  },
});
