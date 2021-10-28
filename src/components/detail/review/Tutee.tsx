import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors, fonts} from '../../../constants';
import {StarRating} from '../../common';

type Props = {
  data: {
    name: string;
    image: string;
    date: string;
    rating: number;
    text: string;
  };
};
const Tutee = ({data}: Props) => {
  return (
    <View>
      <View style={styles.header_box}>
        <View style={styles.left_box}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => console.log('go to profile')}
            style={styles.img_box}>
            <View style={styles.img}></View>
          </TouchableOpacity>
          <View style={styles.text_box}>
            <View style={styles.tutee_name_box}>
              <Text style={[fonts[500], styles.tutee_name]}>{data.name}</Text>
            </View>
            <View style={styles.rating_box}>
              <StarRating rating={4.5} size={11} />
            </View>
          </View>
        </View>
        <View style={styles.date_box}>
          <Text style={styles.date_text}>{data.date}</Text>
        </View>
      </View>
      <View style={styles.review_box}>
        <Text style={[fonts[400], styles.review_text]}>{data.text}</Text>
      </View>
    </View>
  );
};

export default Tutee;

var styles = StyleSheet.create({
  header_box: {
    height: 35,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  left_box: {
    flex: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  img_box: {width: 41, height: 41},
  img: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'rgba(101, 149, 244, 0.2)',
  },
  text_box: {height: '100%', marginLeft: 12},
  tutee_name_box: {
    justifyContent: 'center',
    height: '50%',
  },
  tutee_name: {color: colors.sub, fontSize: 12.5},
  rating_box: {
    flexDirection: 'row',
    alignItems: 'center',
    height: '50%',
    width: 57.5,
  },
  date_box: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center',
    height: '100%',
  },
  date_text: {
    fontFamily: fonts.montserrat_500,
    fontSize: 12.5,
    color: colors.light_gray,
  },
  review_box: {marginBottom: 18},
  review_text: {
    textAlign: 'auto',
    fontSize: 12.5,
    color: colors.sub,
    lineHeight: 20,
  },
});
