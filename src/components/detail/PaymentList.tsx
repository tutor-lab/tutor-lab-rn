import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import CheckBox from '@react-native-community/checkbox';

import {colors, fonts, icons} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';
import {Line} from '../common';

type Props = {checked: boolean; item: any; enrollId: any; setEnrollId: any};
const PaymentList = ({checked, item, enrollId, setEnrollId}: Props) => {
  const [toggleCheckBox, setToggleCheckBox] = useState(false);
  const [checkNumber, setCheckNumber] = useState(0);
  useEffect(() => {
    item.checked = toggleCheckBox;
  }, [toggleCheckBox]);

  const handleCheckBox = (value: boolean, Id: number) => {
    if (item.lecturePriceId === Id) {
      setToggleCheckBox(value);
      setEnrollId(Id);
      setCheckNumber(Id);
    }
    if (toggleCheckBox) {
      setEnrollId(0);
      setCheckNumber(0);
    }
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      style={[
        styles.container,
        checked ? {borderColor: colors.main} : {borderColor: colors.line},
      ]}>
      <View style={styles.priceContainer}>
        <View style={styles.checkBoxContainer}>
          <View
            style={
              [
                // styles.checkBox,
                // checked
                //   ? {borderColor: colors.main, backgroundColor: colors.main}
                //   : {borderColor: colors.line, backgroundColor: colors.white},
              ]
            }>
            <CheckBox
              disabled={false}
              value={enrollId === checkNumber ? toggleCheckBox : false}
              onValueChange={newValue =>
                handleCheckBox(newValue, item.lecturePriceId)
              }
            />
            {checked ? (
              <WithLocalSvg asset={icons.paymentList_checked} />
            ) : (
              <WithLocalSvg asset={icons.paymentList_unchecked} />
            )}
          </View>
        </View>
        <Text style={styles.price}>{item.totalCost}</Text>
        <Text style={[fonts[700], styles.priceText1]}>원</Text>
        <Text style={[fonts[400], styles.priceText2]}>
          {'  '}/{'  '}
        </Text>
        <Text style={styles.priceText3}>1</Text>
        <Text style={[fonts[400], styles.priceText2]}>개월 기준</Text>
      </View>
      <Line />
      <View style={{paddingVertical: 12}}>
        <View style={styles.row}>
          {/* <Text style={styles.matchingText1}>1:1</Text> */}
          <Text style={[fonts[700], styles.matchingText2]}>
            {' '}
            {item.isGroupStr}
          </Text>
        </View>
        <View style={{paddingVertical: 6}}>
          {/* <Text style={[styles.explainText, fonts[400]]}>
            기초부터 실무에서 사용하는 데이터 분석 기술 파헤치기
           
          </Text> */}
          <View style={styles.row}>
            <Text style={[styles.explainText, fonts[400]]}>
              {item.content}{' '}
            </Text>
            {/* <Text style={styles.explainText}>00000</Text>
            <Text style={[styles.explainText, fonts[400]]}>원 x </Text>
            <Text style={styles.explainText}>1</Text>
            <Text style={[styles.explainText, fonts[400]]}>회 </Text>
            <Text style={styles.explainText}>0</Text>
            <Text style={[styles.explainText, fonts[400]]}>시간 x 총 </Text>
            <Text style={styles.explainText}>00</Text>
            <Text style={[styles.explainText, fonts[400]]}>회 수업 진행</Text> */}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default React.memo(PaymentList);

var styles = StyleSheet.create({
  container: {
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 16,
    borderColor: colors.main,
    marginBottom: 16,
  },
  priceContainer: {
    paddingVertical: 16,
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkBoxContainer: {height: 24, width: 36},
  checkBox: {
    height: 24,
    width: 24,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  row: {flexDirection: 'row'},
  price: {
    fontFamily: fonts.montserrat_600,
    fontSize: 20,
    color: colors.sub,
  },
  matchingText1: {
    fontFamily: fonts.montserrat_600,
    color: colors.sub,
    fontSize: 16,
    marginRight: 3,
  },
  matchingText2: {fontSize: 14, color: colors.sub},
  priceText1: {fontSize: 12, color: colors.sub},
  priceText2: {fontSize: 12, color: colors.light_gray},
  priceText3: {
    fontFamily: fonts.montserrat_400,
    fontSize: 13,
    color: colors.light_gray,
  },
  explainText: {
    fontFamily: fonts.montserrat_400,
    fontSize: 13,
    lineHeight: 19,
    color: colors.sub,
  },
});
