import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../../constants';

type Props = {lectureSubjects: {krSubject: string; parent: string}[]};

const LectureSubjects = ({lectureSubjects}: Props) => {
  return (
    <View style={styles.container}>
      {lectureSubjects.map(data => (
        <View key={data.krSubject}>
          <Text
            numberOfLines={1}
            ellipsizeMode="tail"
            style={[fonts[500], styles.text]}>
            {data.krSubject}
          </Text>
        </View>
      ))}
    </View>
  );
};
export default LectureSubjects;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  text: {fontSize: 16.5, lineHeight: 22.5, color: colors.sub, marginRight: 5},
});
