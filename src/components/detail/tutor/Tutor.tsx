import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';

import {width} from '../../../constants';

import {Button, Name, Count, Profile} from './index';

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
};

const Tutor = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.tutor}>
        <Profile />
        <View style={styles.textSection}>
          <Name name={data.tutor} />
          <Count
            lecture_count={data.lecture_count}
            review_count={data.review_count}
            store_count={data.store_count}
          />
        </View>
      </View>
      <View style={styles.buttonSection}>
        <Button />
      </View>
    </View>
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
