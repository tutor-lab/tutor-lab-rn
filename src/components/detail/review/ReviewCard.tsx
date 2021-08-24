import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';

import {Tutee, Answer} from './index';
import {Line} from '../../../components/common';

type Props = {
  data: {
    id: number;
    tutee: {
      name: string;
      image: string;
      date: string;
      rating: number;
      text: string;
    };
    tutor: {
      name: string;
      image: string;
      date: string;
      text: string;
    } | null;
  };
};

const ReviewCard = ({data}: Props) => {
  return (
    <View>
      {data.id === 0 ? (
        <></>
      ) : (
        <View style={styles.line_box}>
          <Line />
        </View>
      )}
      <Tutee data={data.tutee} />
      {data.tutor ? <Answer data={data.tutor} /> : <></>}
    </View>
  );
};

export default ReviewCard;

var styles = StyleSheet.create({
  line_box: {marginBottom: 18},
});
