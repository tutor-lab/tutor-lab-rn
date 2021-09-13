import React from 'react';
import {View, StyleSheet} from 'react-native';

type Props = {
  divider: number;
  children: any;
  maxWidth?: number;
};

const Container = ({divider, maxWidth, children}: Props) => {
  return (
    <>
      <View style={{width: divider}} />
      <View style={styles.container}>
        <View style={{width: '100%', maxWidth: maxWidth}}>{children}</View>
      </View>
    </>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {flex: 1, alignItems: 'center'},
});
