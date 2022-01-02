import React from 'react';
import {View, StyleSheet} from 'react-native';

interface Props {
  children: any;
  style: any;
}
const SingleSidedShadowBox = ({children, style}: Props) => (
  <View style={[styles.container, style]}>{children}</View>
);
const styles = StyleSheet.create({
  container: {
    overflow: 'hidden',
    paddingBottom: 5,
  },
});

export default SingleSidedShadowBox;
