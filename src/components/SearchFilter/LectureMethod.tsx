import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {width, height, fonts} from '../../constants';
import Selects from './common/Selects';
import {Data} from '../../components/hometab';

const LectureMethod = () => {
  const [selectedId, setSelectedId] = useState<number>(-1);
  const [selectedId2, setSelectedId2] = useState<number>(-1);

  const selectItem = (item: any, index: number) => {
    Data.OnOffline.map(item => {
      item.isSelected = false;
    });
    setSelectedId(item.id);
    item.isSelected = true;
  };
  const selectItem2 = (item: any, index: number) => {
    Data.GroupOrNot.map(item => {
      item.isSelected = false;
    });
    setSelectedId2(item.id);
    item.isSelected = true;
  };
  return (
    <View style={styles.container}>
      <View style={styles.borderLine}></View>
      <Text style={[fonts[700], styles.titleText]}>온·오프라인</Text>
      <View style={styles.datasContainer}>
        {Data.OnOffline.map((item: any, idx: number) => (
          <Selects datas={item} idx={idx} selectItem={selectItem} />
        ))}
      </View>
      <Text style={[fonts[700], styles.titleText]}>개인·그룹</Text>
      <View style={styles.datasContainer}>
        {Data.GroupOrNot.map((item: any, idx: number) => (
          <Selects datas={item} idx={idx} selectItem={selectItem2} />
        ))}
      </View>
      <View
        style={{
          paddingBottom: height * 56,
        }}
      />
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
  },
});

export default LectureMethod;
