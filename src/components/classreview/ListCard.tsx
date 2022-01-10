import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import {Commonstyles, Line, StarRating} from '../../components/common';
import {Modals} from '../../components/editprofile';
import {fonts, colors} from '../../constants';

type Props = {
  setModalText: React.Dispatch<
    React.SetStateAction<{
      title: string;
      describe: string;
    }>
  >;
  setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
};

const ListCard = ({}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState({
    title: '',
    describe: '',
  });

  return (
    <View>
      <View style={[Commonstyles.padding, styles.padding, styles.row]}>
        <View style={styles.leftSection}>
          <View style={styles.imageWrapper}>
            {/* 이미지  누르면 해당 강의로 넘어가기*/}
          </View>
          <View style={styles.textSection}>
            <Text style={[fonts[400], styles.text]}>[SQR, R, Python]</Text>
            <Text
              style={[fonts[400], styles.text]}
              numberOfLines={1}
              ellipsizeMode="tail">
              금융권 취업을 위한 데이터 분석 및 모델링
            </Text>
            <Text style={[fonts[400], styles.text, {color: colors.light_gray}]}>
              온라인 / 그룹
            </Text>
          </View>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.editBtn}
            activeOpacity={1}
            onPress={() => {
              setIsModalVisible(true);
              setModalText({title: '리뷰 수정', describe: '수정하시겠습니까?'});
            }}>
            <View style={[styles.btnWrapper, {backgroundColor: colors.main}]}>
              <Text
                style={[fonts[500], styles.btnTitle, {color: colors.white}]}>
                수정
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.deleteBtn}
            activeOpacity={1}
            onPress={() => {
              setIsModalVisible(true);
              setModalText({title: '리뷰 삭제', describe: '삭제하시겠습니까?'});
            }}>
            <View style={[styles.btnWrapper]}>
              <Text style={[fonts[500], styles.btnTitle]}>삭제</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
      <Line />
      <View style={[Commonstyles.padding, styles.padding]}>
        <View style={styles.row}>
          <View style={styles.star}>
            <StarRating rating={3.5} size={10} />
          </View>
          <View>
            <Text style={styles.date}>2021.07.01</Text>
          </View>
        </View>
        <View style={{marginTop: 6}}>
          <Text style={[fonts[400], styles.text]}>
            질문이 많았는데도 친절하게 잘 설명해주시고, 초보자인 저도 커리큘럼을
            잘 따라갈 수 있었습니다. 정말 감사드려요
          </Text>
        </View>
      </View>
      <Line height={8} />
      {isModalVisible && (
        <Modals.Container
          visible={isModalVisible}
          setVisible={setIsModalVisible}>
          <Modals.Title text={modalText.title} />
          <Modals.Description text={modalText.describe} />
          <Modals.TwoBtn
            textCancel={'아니요'}
            textOk={'예'}
            onPressCancel={() => setIsModalVisible(false)}
            onPressOk={() => {
              setIsModalVisible(false);
              navigation.navigate('ReviewWrite');
            }}
          />
        </Modals.Container>
      )}
    </View>
  );
};

export default ListCard;

const styles = StyleSheet.create({
  padding: {paddingVertical: 15},
  star: {width: 66, marginRight: 12},
  row: {flexDirection: 'row', alignItems: 'center'},
  date: {
    fontFamily: fonts.montserrat_500,
    fontSize: 10,
    color: colors.light_gray,
  },
  imageWrapper: {
    height: 50,
    width: 50,
    backgroundColor: colors.skyBlue,
    borderRadius: 6,
  },
  text: {fontSize: 12},
  leftSection: {flex: 3, flexDirection: 'row'},
  textSection: {marginLeft: 12, flex: 1},
  rightSection: {
    flex: 1,
    alignItems: 'flex-end',
  },
  writeBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.main,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 11,
  },
  editBtn: {flex: 1, justifyContent: 'flex-start'},
  deleteBtn: {flex: 1, justifyContent: 'flex-end'},
  btnWrapper: {
    backgroundColor: 'rgba(238, 90, 90, 0.1)',
    borderRadius: 6,
    paddingHorizontal: 8,
    paddingTop: 2,
    paddingBottom: 3,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnTitle: {color: colors.red, fontSize: 12},
});
