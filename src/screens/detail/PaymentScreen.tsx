import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  ScrollView,
  Alert,
} from 'react-native';
import axios from 'axios';

import {colors, fonts, width} from '../../constants';
import {Line, Bottom, Header} from '../../components/common';
import {PaymentInfo, PaymentList} from '../../components/detail';

type Props = {
  navigation: any;
  route: {
    params: any;
  };
};

const PaymentScreen = ({navigation, route}: Props) => {
  const [enrollId, setEnrollId] = useState(0);

  const onPayment = () => {
    if (enrollId === 0) {
      return Alert.alert('옵션을 선택해주세요.');
    }
    axios
      .post(`/lectures/${route.params.itemId}/${enrollId}/enrollments`)
      .then(function (response) {
        if (response.status === 201) {
          Alert.alert('강의신청이 완료되었습니다!');
          navigation.navigate('Main');
        }
      })
      .catch(function (error) {
        if (error.response.data.code === 400) {
          Alert.alert(error.response.data.message);
        }
      });
  };

  return (
    <SafeAreaView style={styles.container}>
      <Header.Payment navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <PaymentInfo info={route.params} />
        <Line height={8} />
        <View style={{paddingHorizontal: width * 20}}>
          <View style={styles.option}>
            <Text style={[fonts[700], styles.text]}>옵션 선택</Text>
          </View>
          {route.params.lecturePrices.map((item: any) => (
            <PaymentList
              checked={true}
              item={item}
              enrollId={enrollId}
              setEnrollId={setEnrollId}
            />
          ))}
          {/* <PaymentList checked={true} /> */}
          {/* <PaymentList checked={false} /> */}
        </View>
      </ScrollView>
      <Bottom.Payment price={179000} onPress={onPayment} />
    </SafeAreaView>
  );
};

export default PaymentScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {flexGrow: 1},
  option: {marginTop: 20, marginBottom: 13},
  text: {fontSize: 16, color: colors.sub},
});
