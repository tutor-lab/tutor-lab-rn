import React from 'react';
import {View, StyleSheet} from 'react-native';
import {width} from '../../../constants';

type Props = {
  children: any;
};

const Container = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingVertical: 24,
    paddingHorizontal: width * 20,
    flexDirection: 'row',
  },
});
