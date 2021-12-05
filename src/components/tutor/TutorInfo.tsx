import React, {useState, useEffect} from 'react';
import {View, Text, ScrollView, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {TutorInfoType} from '../../types/data';
import {Line} from '../../components/common';
import {width, fonts, icons, colors} from '../../constants';

type Props = {
  tutorInfo: TutorInfoType;
};
const TutorInfo = ({tutorInfo}: Props) => {
  const [user, setUser] = useState(tutorInfo.user);
  const [educations, setEducations] = useState(tutorInfo.educations[0]);
  const [careers, setCareers] = useState(tutorInfo.careers[0]);

  const changeData = obj => {
    let newObj = JSON.parse(JSON.stringify(obj));
    for (const key in newObj) {
      if (newObj[key] === null || newObj[key] === '') {
        newObj[key] = '-';
      }
    }
    return newObj;
  };
  useEffect(() => {
    setUser(changeData(tutorInfo.user));
    setEducations(changeData(tutorInfo.educations[0]));
    setCareers(changeData(tutorInfo.careers[0]));
  }, [tutorInfo]);

  return (
    <ScrollView>
      <View style={styles.padding}>
        <Text style={[fonts[700], styles.header]}>기본정보</Text>
        <View style={styles.profileBasicWrapper}>
          <View style={styles.image}>
            <WithLocalSvg asset={icons.logo_translucent} />
          </View>
          <View style={styles.basicInfoWrapper}>
            <View style={styles.titleWrapper}>
              <Text style={[fonts[400], styles.title]}>이름</Text>
              <Text style={[fonts[400], styles.title]}>휴대폰번호</Text>
              <Text style={[fonts[400], styles.title]}>이메일</Text>
            </View>
            <View style={styles.textWrapper}>
              <Text style={[fonts[400], styles.text]}>{user.nickname}</Text>
              <Text style={[fonts[400], styles.text]}>{user.phoneNumber}</Text>
              <Text style={[fonts[400], styles.text]}>{user.email}</Text>
            </View>
          </View>
        </View>
      </View>
      <Line />
      <View style={styles.padding}>
        <Text style={[fonts[700], styles.header]}>학력정보</Text>
        <View style={styles.infoWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              최종학력
            </Text>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              학교 명
            </Text>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              전공
            </Text>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              그 외 학력
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {educations.educationLevel}
            </Text>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {educations.schoolName}
            </Text>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {educations.major}
            </Text>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {educations.others}
            </Text>
          </View>
        </View>
      </View>
      <Line />
      <View style={styles.padding}>
        <Text style={[fonts[700], styles.header]}>경력정보</Text>
        <View style={styles.infoWrapper}>
          <View style={styles.titleWrapper}>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              회사
            </Text>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              직업
            </Text>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              라이센스
            </Text>
            <Text style={[fonts[400], styles.title, styles.textMargin]}>
              그 외
            </Text>
          </View>
          <View style={styles.textWrapper}>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {careers.companyName}
            </Text>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {careers.job}
            </Text>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {careers.license}
            </Text>
            <Text style={[fonts[400], styles.text, styles.textMargin]}>
              {careers.others}
            </Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default TutorInfo;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 26},
  header: {fontSize: 14, marginTop: 9},
  profileBasicWrapper: {paddingVertical: 11, flexDirection: 'row'},
  image: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.line,
    height: 113.32,
    width: 86.1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  basicInfoWrapper: {
    justifyContent: 'center',
    marginLeft: width * 37,
    flexDirection: 'row',
  },
  titleWrapper: {justifyContent: 'space-evenly'},
  textWrapper: {marginLeft: width * 15, justifyContent: 'space-evenly'},
  title: {color: colors.light_gray, fontSize: 14},
  text: {fontSize: 14},
  infoWrapper: {paddingVertical: 9.5, flexDirection: 'row'},
  textMargin: {marginBottom: 11},
});
