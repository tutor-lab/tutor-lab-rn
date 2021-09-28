import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, Text} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {title: string};
const Title = ({title}: Props) => {
  return (
    <>
      <Text
        numberOfLines={1}
        ellipsizeMode="tail"
        style={[fonts[500], styles.text]}>
        {title}
      </Text>
    </>
  );
};
export default Title;

const styles = StyleSheet.create({
  container: {marginTop: 7},
  text: {fontSize: 16.5, lineHeight: 22.5, color: colors.sub},
});
