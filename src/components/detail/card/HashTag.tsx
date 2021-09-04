import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';

import {fonts, colors} from '../../../constants';

type Props = {hashTag: string[]};

const HashTag = ({hashTag}: Props) => {
  return (
    <>
      {hashTag.map(text => (
        <View key={text} style={styles.tag}>
          <Text style={[fonts[400], styles.text]}>#</Text>
          <Text style={[fonts[400], styles.text]}>{text}</Text>
        </View>
      ))}
    </>
  );
};

export default HashTag;

const styles = StyleSheet.create({
  tag: {
    height: 22,
    alignItems: 'center',
    borderRadius: 8,
    flexDirection: 'row',
    paddingHorizontal: 8,
    marginRight: 8,
    backgroundColor: colors.bg_color,
    marginBottom: 8,
  },
  text: {
    color: colors.light_gray,
    fontSize: 11,
    textAlignVertical: 'center',
  },
});
