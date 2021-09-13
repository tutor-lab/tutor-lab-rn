import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';

import {Button} from '../../../components/common';
import Container from './Container';
import {fonts, utils, colors} from '../../../constants';

type Props = {
  price: number;
  onPress: () => void;
};
const Payment = ({price, onPress}: Props) => {
  return (
    <Container>
      <View>
        <Text style={[fonts[500], styles.text01]}>총 결제금액</Text>
        <View style={styles.priceBox}>
          <Text style={styles.text02}>{utils.numberWithCommas(price)}</Text>
          <Text style={[fonts[700], styles.Text03]}>원</Text>
        </View>
      </View>
      <Button.Container divider={60} maxWidth={185}>
        <Button.Button_48 text={'결제'} onPress={onPress} />
      </Button.Container>
    </Container>
  );
};

export default Payment;

var styles = StyleSheet.create({
  text01: {fontSize: 12, color: colors.light_gray},
  text02: {
    fontFamily: fonts.montserrat_600,
    fontSize: 20,
    color: colors.sub,
  },
  Text03: {fontSize: 12, color: colors.sub},
  priceBox: {flexDirection: 'row', alignItems: 'center'},
});
