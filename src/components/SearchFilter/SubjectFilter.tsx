import React, {useEffect, useState, useCallback} from 'react';
import axios from 'axios';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import {width, height, fonts} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';

interface SubjectListType {
  krSubject: string;
  isSelected: boolean;
}
interface Props {
  selectSubjectTitleList: any;
  setSelectSubjectTitleList: any;
}
const SubjectFilter = (props: Props) => {
  const [subjectList, setSubjectList] = useState<SubjectListType[]>([]);
  const [selectSubjectList, setSelectSubjectList] = useState<SubjectListType[]>(
    [],
  );
  const getData = () => {};

  const initData = async () => {
    const item = await AsyncStorage.getItem('selectSubjectList');

    if (item) {
      setSelectSubjectList(JSON.parse(item));
    } else {
      axios.get('/subjects').then(res => {
        setSubjectList(res.data);
      });
    }
    // axios.get('/subjects').then(res => {
    //   setSubjectList(res.data);
    // });
  };
  useEffect(() => {
    initData();
  }, []);
  const initSelect = async () => {
    const item = await AsyncStorage.getItem('selectSubjectList');
    if (!item) {
      const noselectSubject = subjectList.map(item => {
        item.isSelected = false;
        return {...item};
      });
      setSelectSubjectList(noselectSubject);
      AsyncStorage.setItem(
        'selectSubjectList',
        JSON.stringify(noselectSubject),
      );
    }
  };
  useEffect(() => {
    initSelect();
  }, [subjectList]);
  const itemSelect = (krSubject: string, index: number) => {
    const selectItem = selectSubjectList.map((item, idx) => {
      if (idx === index) {
        item.isSelected = !item.isSelected;
        if (item.isSelected) {
          props.setSelectSubjectTitleList(
            props.selectSubjectTitleList.concat(item.krSubject),
          );
        } else {
          props.setSelectSubjectTitleList(
            props.selectSubjectTitleList.filter(item => item !== krSubject),
          );
        }
      }
      return {...item};
    });
    const selectedItem = selectItem
      .filter(item => item.isSelected)
      .map(item => item.krSubject);

    setSelectSubjectList(selectItem);
    AsyncStorage.setItem('selectSubjectList', JSON.stringify(selectItem));
  };

  return (
    <View style={styles.container}>
      <View style={styles.borderBottomLine}></View>
      <Text style={[fonts[700], styles.titleText]}>과목</Text>

      <ScrollView nestedScrollEnabled={true} style={styles.subjectList}>
        <View style={styles.subjectContainer}>
          {selectSubjectList.map((item, index) => (
            <TouchableOpacity onPress={() => itemSelect(item.krSubject, index)}>
              <View
                style={{
                  width: width * 101,
                  height: height * 36,
                  overflow: 'hidden',
                  alignItems: 'center',
                  marginTop: height * 12,
                  marginRight: width * 8,
                  borderColor: item.isSelected ? '#689AFD' : '#E8EAEF',
                  borderWidth: 1,
                  borderRadius: 50,
                  paddingTop: height * 8,
                  backgroundColor: item.isSelected ? '#689AFD' : '#fff',
                }}>
                <Text
                  style={[
                    styles.textStyle,
                    {color: item.isSelected === true ? '#fff' : '#000'},
                  ]}>
                  {item.krSubject}
                </Text>
              </View>
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    marginTop: height * 27,
    marginLeft: width * 20,
    marginRight: width * 20,
  },
  borderBottomLine: {
    borderBottomColor: '#efefef',
    borderBottomWidth: 1,
  },
  titleText: {
    color: '#2C343F',
    lineHeight: 22,
    fontSize: height * 16,
    marginTop: height * 25,
  },
  subjectList: {
    marginTop: height * 14,
    height: height * 254,
    width: '100%',
  },
  subjectContainer: {
    flexWrap: 'wrap',
    flexDirection: 'row',
    flex: 1,
    width: '100%',
    height: '100%',
    justifyContent: 'center',
  },
  textStyle: {
    flexDirection: 'row',
    textAlign: 'center',
    fontFamily: fonts.montserrat_500,
  },
});

export default React.memo(SubjectFilter);
