import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {width, icons} from '../../../constants';
import {Container} from './index';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  navigation: any;
  //  홈 아이콘 클릭시?
};

const Payment = ({navigation}: Props) => {
  return (
    <Container>
      <View style={styles.padding}>
        <TouchableOpacity activeOpacity={1} onPress={() => navigation.goBack()}>
          <WithLocalSvg asset={icons.close} />
        </TouchableOpacity>
      </View>
    </Container>
  );
};

export default Payment;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 20, flexDirection: 'row'},
});
