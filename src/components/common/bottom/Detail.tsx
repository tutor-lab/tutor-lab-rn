import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';

import {Button} from '../../../components/common';
import Container from './Container';

type Props = {
  heart: () => void;
  btn: () => void;
};

const Detail = ({heart, btn}: Props) => {
  return (
    <Container>
      {/* <Button.Heart onPress={heart} /> */}
      <Button.Container divider={10} maxWidth={279}>
        <Button.Button_48 text={'강의 신청'} onPress={btn} />
      </Button.Container>
    </Container>
  );
};

export default Detail;

var styles = StyleSheet.create({});
