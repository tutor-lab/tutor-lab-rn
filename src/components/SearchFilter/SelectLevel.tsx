import React, {useState} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {Data} from '../../components/hometab';
import {width, height, fonts} from '../../constants';
import Selects from './common/Selects';
const SelectLevel = () => {
  const [selectedId, setSelectedId] = useState<number>(-1);
  const selectItem = (item: any, index: number) => {
    Data.Level.map(item => {
      item.isSelected = false;
    });
    setSelectedId(item.id);
    item.isSelected = true;
  };
  return (
    <View style={styles.container}>
      <View style={styles.borderLine}></View>
      <Text style={[fonts[700], styles.titleText]}>레벨</Text>
      <View style={styles.datasContainer}>
        {Data.Level.map((item: any, idx: number) => (
          <Selects datas={item} idx={idx} selectItem={selectItem} />
        ))}
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: height * 27,
    marginLeft: width * 20,
    marginRight: width * 20,
  },
  borderLine: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
  },
  titleText: {
    color: '#2C343F',
    lineHeight: 22,
    fontSize: height * 16,
    marginTop: height * 25,
  },
  datasContainer: {
    flexDirection: 'row',
    paddingBottom: height * 64,
  },
});
export default SelectLevel;
