import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {title: string};
const Title = ({title}: Props) => {
  return (
    <>
      <Text
        numberOfLines={2}
        ellipsizeMode="tail"
        style={[fonts[500], styles.text]}>
        {title}
      </Text>
    </>
  );
};
export default Title;

const styles = StyleSheet.create({
  text: {fontSize: 20, lineHeight: 30, color: colors.sub},
});
