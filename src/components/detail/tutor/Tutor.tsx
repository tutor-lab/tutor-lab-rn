import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';

import {colors, width} from '../../../constants';
import {Button, Name, Count} from './index';
import {fonts} from '../../../constants';
type Props = {
  data: {
    tag: string[];
    remote: string[];
    title: string;
    explain: string;
    tutor: string;
    hashtag: string[];
    heart: number;
    rating: number;
    review: number;
    discount: number;
    price: string;
    lecture_count: number;
    review_count: number;
    store_count: number;
  };
  introduce: string;
  lectureTutor: any;
  navigation: any;
};

const Tutor = ({navigation, data, introduce, lectureTutor}: Props) => {
  return (
    <TouchableOpacity
      style={styles.container}
      activeOpacity={1}
      onPress={() => navigation.navigate('Tutor', {id: lectureTutor.tutorId})}>
      <View style={styles.tutor}>
        <View style={styles.imageWrapper}>
          {lectureTutor.image === null || lectureTutor.image === '' ? (
            <View style={styles.image} />
          ) : (
            <Image
              source={{
                uri: `${lectureTutor.image}`,
              }}
              resizeMode="cover"
              style={styles.image}
            />
          )}
        </View>
        <View style={styles.textSection}>
          <Name name={lectureTutor.nickname} />
          <Count
            lecture_count={lectureTutor.lectureCount}
            review_count={lectureTutor.reviewCount}
            store_count={data.store_count}
          />
          <Text style={fonts[500]}>{introduce}</Text>
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button />
      </View>
    </TouchableOpacity>
  );
};
export default Tutor;

const styles = StyleSheet.create({
  container: {
    height: 84,
    flexDirection: 'row',
    alignItems: 'center',
    paddingLeft: width * 20,
    paddingRight: width * 28,
  },
  imageWrapper: {
    width: 41,
    height: 41,
    overflow: 'hidden',
    borderRadius: 82 / 2,
  },
  image: {
    height: '100%',
    width: '100%',
    backgroundColor: colors.profile,
  },
  tutor: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSection: {
    height: '100%',
    marginLeft: 12,
  },
  buttonSection: {flex: 1, alignItems: 'flex-end'},
});
