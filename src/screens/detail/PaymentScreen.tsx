import React from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {colors, fonts, icons, width} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';
import {Line} from '../../components/common';

import {PaymentInfo, PaymentList} from '../../components/detail';

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
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.header}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}
            style={styles.close}>
            <WithLocalSvg asset={icons.close} />
          </TouchableOpacity>
        </View>
        <PaymentInfo info={route.params} />
        <Line height={8} />
        <View style={{paddingHorizontal: width * 20}}>
          <View style={{marginTop: 20, marginBottom: 13}}>
            <Text style={[fonts[700], {fontSize: 16, color: colors.sub}]}>
              옵션 선택
            </Text>
          </View>
          <PaymentList checked={true} />
          <PaymentList checked={false} />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default PaymentScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  close: {
    paddingLeft: width * 20,
    height: 50,
    width: 100,
    justifyContent: 'center',
  },
  header: {
    height: 50,
    width: '100%',
  },
});
