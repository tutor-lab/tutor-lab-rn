import React, {useState, useEffect, ElementType, useRef} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  TouchableOpacity,
  TextInput,
  Keyboard,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';
import {useNavigation} from '@react-navigation/native';
import axios from 'axios';
import {
  Header,
  Commonstyles,
  Line,
  Button,
  Data,
  ErrorText,
  Modal,
} from '../../components/common';
import {Modals} from '../../components/editprofile';
import {WriteFotter, StarSelect} from '../../components/classreview';
import {colors, fonts} from '../../constants';
import {useInput} from '../../hooks/common';
import {useSelectStar} from '../../hooks/classreview';
import {err} from 'react-native-svg/src/xml';

type Props = {
  route: {
    params: {
      id: number;
      thumbnail: string;
      title: string;
      nickname: string;
      systemTypes: any;
      lecturePrices: any;
      lectureSubjects: any;
    };
  };
};

const ReviewWriteScreen = ({route}: Props) => {
  const id = route.params.id;
  const navigation = useNavigation();
  const input = useRef<ElementType>(null);
  const [starData, onSelectStar] = useSelectStar(Data.StarSelectData);
  const [review, onChangeReview] = useInput('');
  const [isModal, setIsModal] = useState(false);
  const [error, setError] = useState('');

  const onSubmit = async () => {
    if (review.length < 20) {
      Keyboard.dismiss();
      setError('20글자수가 넘어야 합니다.');
    } else {
      setError('');
      const rating = starData.filter((item: any) => item.isSelected).length;
      axios
        .post(`/tutees/my-lectures/${id}/reviews`, {
          content: review,
          score: rating,
        })
        .then(function (response) {
          if (response.status === 201) {
            setIsModal(true);
          }
        })
        .catch(function (error) {
          Keyboard.dismiss();
          console.log(error.message);
        });
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
              source={{uri: `${route.params.thumbnail}`}}
              resizeMode={'cover'}
              style={styles.thumbnail}
            />
          </View>
          <View style={styles.classInfo}>
            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[fonts[400], styles.classTitle]}>
              {route.params.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {route.params.lectureSubjects.map(
                (item: {
                  krSubject: string;
                  learningKind: string;
                  learningKindId: any;
                }) => (
                  <Text style={[fonts[400], styles.classTitle]}>
                    {item.krSubject}{' '}
                  </Text>
                ),
              )}
            </View>
            <Text style={[fonts[400], styles.classExtra]}>
              {route.params.nickname}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <Text style={[fonts[400], styles.classExtra]}>옵션: </Text>
              <Text style={[fonts[400], styles.classExtra]}>
                {route.params.systemTypes.name}
              </Text>
              <Text style={[fonts[400], styles.classExtra]}> / </Text>
              <Text style={[fonts[400], styles.classExtra]}>
                {route.params.lecturePrices.isGroupStr}
              </Text>
            </View>
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
              multiline
              value={review}
              ref={input}
              placeholder={'최소 20자 이상 작성해주세요.'}
              onChangeText={onChangeReview}
            />
          </TouchableOpacity>
        </View>
        {error.length !== 0 && <ErrorText text={error} />}
        <Line height={8} />
        <WriteFotter />
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'등록'} onPress={() => onSubmit()} />
      {isModal && (
        <Modals.Container setVisible={setIsModal} visible={isModal}>
          <Modals.Title text={'후기 등록 완료'} />
          <Modals.Description
            text={`후기 등록이 완료되었습니다.${'\n'}수강하시느라 고생 많으셨습니다.`}
          />
          <Modals.OneBtn
            onPress={() => {
              setIsModal(false);
              navigation.navigate('ReviewList');
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
  thumbnail: {height: '100%', width: '100%', borderRadius: 8},
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
