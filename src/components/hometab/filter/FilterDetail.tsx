import React, {useState} from 'react';
import {Text, StyleSheet, View, TouchableOpacity} from 'react-native';
import {Data} from '../../../components/hometab';
import {width} from '../../../constants';
interface Props {
  titleIdx: number;
  touchFilterCategory: (idx: number) => void;
}
const FilterDetail = (props: Props) => {
  function textCount(text: string) {
    let str = text.toString();
    let redex = /\s/gi;
    let findTextLen = str.replace(redex, '').length;
    return findTextLen;
  }
  return (
    <View style={styles.filterList}>
      {Data.Filter.filter(item => item.text != '전체').map((item: any) => (
        <TouchableOpacity onPress={() => props.touchFilterCategory(item.id)}>
          <Text
            style={[
              styles.filterText,
              item.id === props.titleIdx
                ? styles.filterTextHover
                : styles.filterText,
            ]}>
            {item.text}
          </Text>
          <View
            style={[
              item.id === props.titleIdx && styles.bottomStress,
              {width: textCount(item.text) * 18},
            ]}></View>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  filterList: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  filterText: {
    fontFamily: 'Noto Sans KR',
    color: '#949BAD',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 15,
  },
  filterTextHover: {
    fontFamily: 'Noto Sans KR',
    color: '#2C343F',
    fontWeight: '700',
    fontSize: 16,
    marginLeft: 10,
    // borderBottomWidth: 10,
    // backgroundColor: 'rgba(198,215,251,1)',
  },
  bottomStress: {
    backgroundColor: 'rgba(198,215,251,1)',
    height: 10,
    position: 'absolute',
    bottom: -2,
    left: width * 6,
    zIndex: -1,
  },
});

export default React.memo(FilterDetail);
