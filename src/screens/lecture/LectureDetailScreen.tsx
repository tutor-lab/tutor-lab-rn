import React, {useState} from 'react';
import {
  View,
  ScrollView,
  Text,
  Image,
  SafeAreaView,
  StyleSheet,
} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import {height, colors, fonts, width} from '../../constants';
import {Avatar} from '../../components/common';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
}

const LectureDetailScreen = ({}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.imageConatiner}>
          <View style={styles.imageSection}>
            <Image
              source={require('../../assets/images/card_image.png')}
              resizeMode={'cover'}
              style={styles.image}
            />
          </View>
          <View style={styles.tutorImgSection}>
            <View style={styles.tutorName}>
              <Text style={styles.tutorNameText}>튜터{'  '}</Text>
              <Text style={[styles.tutorNameText, {color: colors.black}]}>
                김하나
              </Text>
            </View>
            <View style={styles.tutorImg}>
              <Avatar />
            </View>
          </View>
        </View>
        {/*  */}
        <View
          style={{
            paddingHorizontal: width * 40,
            paddingTop: 14,
          }}>
          <View
            style={{
              width: width * 270,
            }}>
            <Text
              style={{
                fontFamily: fonts.medium,
                color: colors.black,
                fontSize: 18,
                lineHeight: 21,
              }}>
              금융권 취업을 위한 데이터 분석 및 모델링 {'\n'}- SQL, R, Python
            </Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default LectureDetailScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  imageConatiner: {position: 'relative', height: 275, width: '100%'},
  imageSection: {height: 240, position: 'relative', zIndex: 1},
  tutorImgSection: {
    height: 35,
    zIndex: 2,
    position: 'relative',
    flexDirection: 'row',
  },
  tutorName: {
    flex: 1,
    flexDirection: 'row',
    paddingLeft: width * 40,
    paddingTop: 10,
  },
  tutorNameText: {fontFamily: fonts.regular, color: '#A9A9A9'},
  tutorImg: {
    alignItems: 'flex-end',
    paddingRight: width * 30,
    marginTop: -35,
    flex: 1,
    height: 70,
    width: 70,
  },
  image: {height: '100%', width: '100%'},
});
