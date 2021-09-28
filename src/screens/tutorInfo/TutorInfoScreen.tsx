import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import axios from 'axios';
import {Header, Line, TutorBox} from '../../components/common';
import {colors, fonts, icons, width} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {navigation: any};

const TutorInfoScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header.TutorInfo navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.padding}>
          <View style={styles.profileContainer}>
            <View style={styles.row}>
              <View style={styles.profileLeft}>
                <TutorBox />
                <Text style={[fonts[700], styles.name]}>김하나</Text>
                <Text style={[fonts[400], styles.bio]}>
                  기초부터 실무에서 사용합니다
                </Text>
              </View>
              <View style={styles.profileRight}>
                <View style={styles.imgWrapper}>{/* 프로필 이미지 */}</View>
              </View>
            </View>
            <View style={styles.explainWrapper}>{/*  */}</View>
          </View>
        </View>
        <Line height={8} />
        <View></View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorInfoScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  row: {width: '100%', flexDirection: 'row'},
  scroll: {flexGrow: 1},
  padding: {
    paddingHorizontal: width * 20,
    width: '100%',
    backgroundColor: colors.white,
  },
  profileContainer: {paddingVertical: 3},
  profileLeft: {flex: 1, alignItems: 'flex-start'},
  profileRight: {flex: 1, alignItems: 'flex-end'},
  name: {fontSize: 22, lineHeight: 31.88, marginVertical: 3},
  bio: {fontSize: 13, lineHeight: 19, color: colors.light_gray},
  imgWrapper: {
    height: 88,
    width: 88,
    borderRadius: 50,
    backgroundColor: colors.profile,
    alignItems: 'center',
    justifyContent: 'center',
  },
  explainWrapper: {
    marginVertical: 29,
    height: 72,
    backgroundColor: colors.bg_color,
    borderRadius: 8,
  },
});
