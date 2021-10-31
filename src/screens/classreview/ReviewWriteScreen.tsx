import React, {useState, useEffect, ElementType, useRef} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Header,
  Commonstyles,
  Line,
  Button,
  TextInput,
  Data,
  ErrorText,
  Modal,
} from '../../components/common';
import {Modals} from '../../components/editprofile';
import {WriteFotter, StarSelect} from '../../components/classreview';
import {colors, fonts} from '../../constants';
import {useInput} from '../../hooks/common';
import {useSelectStar} from '../../hooks/classreview';

const ReviewWriteScreen = ({navigation}) => {
  const input = useRef<ElementType>(null);
  const [rating, setRating] = useState<number>(5); //초기에는 무조건 별점 5!
  const [starData, onSelectStar] = useSelectStar(Data.StarSelectData);
  const [review, onChangeReview] = useInput('');
  const [isModal, setIsModal] = useState(false);

  const onSubmit = () => {
    if (review.length > 20) {
    } else {
      // const findRating = starData.filter((item: any) => item.isSelected).length; 최종별점
      // 제출 api
      setIsModal(true);
    }
  };

  return (
    <SafeAreaView style={Commonstyles.container}>
      <KeyboardAwareScrollView>
        <Header.Basic navigation={navigation} title={'후기 작성'} />
        <View style={[Commonstyles.padding, styles.classInfoWrapper]}>
          <View style={styles.imageBox}>
            {/* 이미지 */}
            <Image
              style={styles.image}
              resizeMode={'cover'}
              source={require('../../assets/images/detail.png')}
            />
          </View>
          <View style={styles.classInfo}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[fonts[400], styles.classTitle]}>
              금융권 취업을 위한 데이터 분석 및 모델링 분석 및 모델링
            </Text>
            <Text style={[fonts[400], styles.classTitle]}>SQL, R, Python</Text>
            <Text style={[fonts[400], styles.classExtra]}>김하나</Text>
            <Text style={[fonts[400], styles.classExtra]}>
              옵션: 1.온라인 / 2.그룹
            </Text>
          </View>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
          <Text style={[fonts[400], styles.title]}>강의는 만족하셨나요?</Text>
          <View style={styles.ratingBox}>
            {starData.map(item => (
              <StarSelect
                key={item.id}
                star={item}
                onSelectStar={onSelectStar}
              />
            ))}
          </View>
        </View>
        <Line height={8} />
        <View style={[Commonstyles.padding, styles.padding]}>
          <Text style={styles.title}>상세한 후기를 알려주세요</Text>
          <TouchableOpacity
            activeOpacity={1}
            style={styles.textInputWrapper}
            onPress={() => input.current.focus()}>
            <TextInput
              ref={input}
              placeholder={'최소 20자 이상 작성해주세요.'}
              value={review}
              multiline
              onChangeText={onChangeReview}
            />
          </TouchableOpacity>
        </View>
        <Line height={8} />
        <WriteFotter />
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'등록'} onPress={() => ''} />
      {isModal && (
        <Modals.Container setVisible={setIsModal} visible={isModal}>
          <Modals.Title text={'후기 등록 완료'} />
          <Modals.Description
            text={`후기 등록이 완료되었습니다.${'\n'}수강하시느라 고생 많으셨습니다.`}
          />
          <Modals.OneBtn
            onPress={() => {
              setIsModal(false);
              navigation.goBack();
            }}
            text={'확인'}
          />
        </Modals.Container>
      )}
    </SafeAreaView>
  );
};

export default ReviewWriteScreen;

const styles = StyleSheet.create({
  image: {borderRadius: 8, height: '100%', width: '100%'},
  classInfoWrapper: {paddingVertical: 17, flexDirection: 'row'},
  imageBox: {height: 84, width: 84},
  classInfo: {flex: 1, paddingLeft: 12, justifyContent: 'space-between'},
  classTitle: {fontSize: 14},
  classExtra: {fontSize: 12, color: colors.light_gray},
  padding: {
    alignItems: 'center',
    paddingVertical: 25,
  },
  ratingBox: {
    width: 220,
    height: 40,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 12,
  },
  title: {fontSize: 16},
  textInputWrapper: {
    height: 168,
    width: '100%',
    backgroundColor: colors.bg_color,
    borderRadius: 10,
    marginTop: 15,
  },
});
