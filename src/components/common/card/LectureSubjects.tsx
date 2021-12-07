import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../constants';
import {LectureListType} from '../../../types/data';

type Props = {
  lectureSubjects: {
    learningKindId: null | number;
    learningKind: string;
    krSubject: string;
  }[];
};

const LectureSubjects = ({lectureSubjects}: Props) => {
  return (
    <View style={styles.container}>
      {lectureSubjects.map((item, index) => (
        <Text
          key={index}
          numberOfLines={1}
          ellipsizeMode="tail"
          style={[fonts[500], styles.text]}>
          {item.krSubject}{' '}
        </Text>
      ))}
    </View>
  );
};
export default LectureSubjects;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  text: {fontSize: 16.5, lineHeight: 22.5, color: colors.sub, marginRight: 5},
});
