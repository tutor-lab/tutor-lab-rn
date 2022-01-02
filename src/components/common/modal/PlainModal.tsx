import React, {useState, useEffect} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import FilterDetail from '../../hometab/filter/FilterDetail';
import SubjectFilter from '../../SearchFilter/SubjectFilter';
import SelectLevel from '../../SearchFilter/SelectLevel';
import LectureMethod from '../../SearchFilter/LectureMethod';
import {WithLocalSvg} from 'react-native-svg/src';
import {width, height, fonts, icons} from '../../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import SingleSidedShadowBox from '../../SearchFilter/SingleSidedShadowBox';

type GenericObject = {[key: string]: any};
interface Props {
  modalVisible: boolean;
  setModalVisible: any;
  body: any;
  titleIdx: number;
  touchFilterCategory: (idx: number) => void;
}
interface SubjectListType {
  krSubject: string;
  isSelected: boolean;
}
const PlainModal = (props: Props) => {
  const [selectSubjectTitleList, setSelectSubjectTitleList] = useState<
    string[]
  >([]);
  const [selectSubjectList, setSelectSubjectList] = useState<SubjectListType[]>(
    [],
  );
  const cacheSubject = async () => {
    const selectedItem = await AsyncStorage.getItem('selectSubjectTitleList');
    if (!selectedItem) {
      await AsyncStorage.setItem(
        'selectSubjectTitleList',
        JSON.stringify(selectSubjectTitleList),
      );
    }
  };
  const initData = async () => {
    const selectedItem = await AsyncStorage.getItem('selectSubjectTitleList');
    if (selectedItem) {
      setSelectSubjectTitleList(JSON.parse(selectedItem));
    }
  };
  useEffect(() => {
    cacheSubject();
    initData();
  }, []);

  const renderDetailView = (idx: number) => {
    switch (idx) {
      case 1:
        return (
          <SubjectFilter
            selectSubjectTitleList={selectSubjectTitleList}
            setSelectSubjectTitleList={setSelectSubjectTitleList}
            selectSubjectList={selectSubjectList}
            setSelectSubjectList={setSelectSubjectList}
          />
        );
      case 2:
        return <LectureMethod />;
      case 3:
        return <SelectLevel />;
    }
    return <></>;
  };

  const removeSelectSubject = (subject: string) => {
    const listObj: any = [];
    const res = selectSubjectTitleList.filter(item => item !== subject);

    setSelectSubjectTitleList(res);

    selectSubjectTitleList.filter(item => item !== subject);
    selectSubjectList.map(item => {
      if (item.krSubject === subject) {
        item.isSelected = false;
      }
    });
    selectSubjectList.filter(item => item.krSubject !== subject);

    setSelectSubjectList(selectSubjectList);
    // AsyncStorage.setItem('selectSubjectList', JSON.stringify(selectItem));
  };

  return (
    <Modal
      animationType={'slide'}
      transparent={true}
      visible={props.modalVisible}>
      <View
        style={styles.container}
        onTouchEnd={() => props.setModalVisible(false)}></View>
      <ScrollView nestedScrollEnabled={true} style={styles.blankSpace}>
        <View style={{marginTop: 30}}>
          {/* {props.body()}  */}
          <FilterDetail
            titleIdx={props.titleIdx}
            touchFilterCategory={props.touchFilterCategory}
          />
          {renderDetailView(props.titleIdx)}
        </View>
        {/* <SingleSidedShadowBox style={{width: '100%', height: 40}}>
          <View
            style={{
              backgroundColor: '#fff',
              width: '100%',
              height: '100%',
              shadowColor: '#000',
              shadowOffset: {width: 1, height: 1},
              shadowOpacity: 0.4,
              shadowRadius: 3,
              elevation: 2,
            }}
          />
        </SingleSidedShadowBox> */}
        <ScrollView horizontal={true}>
          <View style={styles.selectedSubjectContainer}>
            {selectSubjectTitleList.map(item => (
              <View style={styles.selectSubject}>
                <Text style={styles.selectSubjectText}>{item}</Text>
                {/* 제거하는 아이콘 */}
                <TouchableOpacity onPress={() => removeSelectSubject(item)}>
                  <View
                    style={{
                      position: 'relative',

                      paddingTop: height * 5,
                      paddingLeft: width * 6.5,
                    }}>
                    <WithLocalSvg asset={icons.exit_btn} />
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        </ScrollView>
        <View style={styles.borderLine} />
        <View style={styles.bottomArea}>
          <View style={styles.initBtn}>
            <View style={styles.refresh}>
              <WithLocalSvg asset={icons.refreshbtn} />
            </View>
            <View>
              <Text style={styles.initText}>초기화</Text>
            </View>
          </View>
          <View style={styles.selectBtn}>
            <View>
              <View>
                <Text style={styles.selectText}>
                  {selectSubjectTitleList.length}개의 강의보기
                </Text>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </Modal>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  blankSpace: {
    position: 'absolute',
    width: '100%',
    height: '70%',
    backgroundColor: '#fff',
    bottom: 0,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
  },
  selectedSubjectContainer: {
    flexDirection: 'row',
    marginLeft: width * 20,
    marginTop: height * 17,
  },
  selectSubject: {
    width: width * 101,
    height: height * 36,
    backgroundColor: '#689AFD',
    marginRight: width * 8,
    borderWidth: 1,
    borderRadius: 50,
    paddingTop: height * 8,
    borderColor: '#689AFD',
    flexDirection: 'row',
    justifyContent: 'center',
  },
  selectSubjectText: {
    flexDirection: 'row',
    textAlign: 'center',
    fontFamily: fonts.montserrat_500,
    color: '#fff',
  },
  borderLine: {
    borderTopWidth: 1,
    borderColor: '#efefef',
    marginTop: height * 16,
    marginLeft: width * 20,
    marginRight: width * 20,
  },
  bottomArea: {
    marginTop: height * 23,
    marginLeft: width * 20,
    marginRight: width * 20,
    marginBottom: height * 42,
    flexDirection: 'row',
    alignItems: 'center',
  },
  initBtn: {
    width: width * 106,
    height: height * 48,
    backgroundColor: '#2C343F',
    borderRadius: 10,
    flexDirection: 'row',
  },
  initText: {
    // textAlign: 'center',
    color: '#fff',
    fontFamily: fonts.medium,
    marginLeft: width * 8.5,
    marginTop: height * 3,
  },
  refresh: {
    paddingTop: 16.5,
    paddingLeft: 20.5,
  },
  selectBtn: {
    width: width * 221,
    height: height * 48,
    backgroundColor: '#6595F4',
    borderRadius: 10,
    marginLeft: width * 8,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectText: {
    color: '#fff',
    fontFamily: fonts.medium,
  },
});

export default PlainModal;
