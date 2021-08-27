import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';

import {Button} from '../../../components/common';
import Container from './Container';

type Props = {
  heart: () => void;
  btn: () => void;
};

const Detail = ({heart, btn}: Props) => {
  return (
    <Container>
      <Button.Heart onPress={heart} />
      <View style={styles.divider} />
      <View style={styles.btn_box}>
        <Button.Button_48 text={'강의 신청'} onPress={btn} />
      </View>
    </Container>
  );
};

export default Detail;

var styles = StyleSheet.create({
  divider: {width: 10},
  btn_box: {flex: 1},
});
