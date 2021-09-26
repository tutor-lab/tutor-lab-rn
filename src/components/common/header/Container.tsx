import React from 'react';
import {View, StyleSheet} from 'react-native';
import {colors} from '../../../constants';

type Props = {
  children: any;
};

const Container = ({children}: Props) => {
  return <View style={styles.container}>{children}</View>;
};

export default Container;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: colors.white,
  },
});
