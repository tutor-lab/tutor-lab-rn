import React from 'react';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Selected, UnSelected} from './index';

type Props = {
  lecture: {
    all: boolean;
    custom: boolean;
  };
  setLecture: React.Dispatch<
    React.SetStateAction<{
      all: boolean;
      custom: boolean;
    }>
  >;
};

const Lecture = ({lecture, setLecture}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setLecture({all: true, custom: false})}
        style={styles.touchable}>
        {lecture.all ? (
          <Selected text={'전체 강의'} />
        ) : (
          <UnSelected text={'전체 강의'} />
        )}
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setLecture({all: false, custom: true})}
        style={styles.touchable}>
        {lecture.custom ? (
          <Selected text={'맞춤 강의'} />
        ) : (
          <UnSelected text={'맞춤 강의'} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Lecture;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  touchable: {height: 50},
  divider: {width: 22},
});
