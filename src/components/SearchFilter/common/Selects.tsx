import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {width, height, fonts} from '../../../constants';
const Selects = (props: any) => {
  return (
    <TouchableOpacity
      onPress={() => props.selectItem(props.datas, props.index)}>
      <View
        style={[
          styles.datasContainer,
          {
            backgroundColor: props.datas.isSelected ? '#689AFD' : '#fff',
            borderColor: props.datas.isSelected ? '#689AFD' : '#E8EAEF',
            borderWidth: 1,
          },
        ]}>
        <Text
          style={{
            color: props.datas.isSelected ? '#fff' : '#434A58',
          }}>
          {props.datas.text}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  datasContainer: {
    marginTop: height * 13,
    marginRight: width * 8,
    minWidth: width * 47,
    width: 'auto',
    // width: width * 47,
    height: height * 36,
    paddingLeft: width * 12,
    paddingRight: width * 12,
    backgroundColor: '#689AFD',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 50,
  },
});

export default Selects;
