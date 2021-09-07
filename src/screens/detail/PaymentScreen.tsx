import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, SafeAreaView, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fonts, icons, width} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

import {PaymentInfo} from '../../components/detail';

type Props = {
  navigation: any;
  route: {
    params: {
      title: string;
      tutor: string;
      subject: {id: number; krSubject: string; parent: string}[];
    };
  };
};

const PaymentScreen = ({navigation, route}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => navigation.goBack()}
        style={{
          paddingLeft: width * 20,
          height: 50,
          width: 100,
        }}>
        <View
          style={{
            height: '100%',
            justifyContent: 'center',
          }}>
          <WithLocalSvg asset={icons.close} />
        </View>
      </TouchableOpacity>
      <PaymentInfo info={route.params} />
      <View style={{height: 8, width: '100%', backgroundColor: colors.line}} />
    </SafeAreaView>
  );
};

export default PaymentScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  close_box: {
    marginTop: 10,
    justifyContent: 'center',
    height: 36,
    backgroundColor: 'red',
  },
});
