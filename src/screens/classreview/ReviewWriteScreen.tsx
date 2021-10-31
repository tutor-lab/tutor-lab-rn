import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, SafeAreaView, Image, Text, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {
  Header,
  Commonstyles,
  Line,
  Button,
  TextInput,
  Data,
} from '../../components/common';
import {WriteFotter, StarSelect} from '../../components/classreview';
import {icons, colors, fonts} from '../../constants';
import useSelectStar from '../../hooks/useSelectStar';

const ReviewWriteScreen = ({navigation}) => {
  const [rating, setRating] = useState<number>(5); //초기에는 무조건 별점 5!
  const [starData, onSelectStar] = useSelectStar(Data.StarSelectData);

  // const findRating = starData.filter((item: any) => item.isSelected).length; 최종별점

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
          <View style={styles.textInputWrapper}>{/* textInput */}</View>
        </View>
        <Line height={8} />
        <WriteFotter />
      </KeyboardAwareScrollView>
      <Button.Button_Bottom title={'등록'} onPress={() => ''} />
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
