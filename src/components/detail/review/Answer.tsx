import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {
  data: {
    name: string;
    image: string;
    date: string;
    text: string;
  };
};
const Answer = ({data}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.header_box}>
        <TouchableOpacity
          activeOpacity={1}
          onPress={() => console.log('go to profile')}
          style={styles.img_box}>
          <View style={styles.img}></View>
        </TouchableOpacity>
        <View style={styles.text_box}>
          <View style={styles.tutor_name_box}>
            <Text style={[fonts[500], styles.tutor_name_text]}>
              {data.name}
            </Text>
          </View>
          <View style={styles.date_box}>
            <Text style={styles.date_text}>{data.date}</Text>
          </View>
        </View>
      </View>
      <View style={styles.answer_box}>
        <Text style={[fonts[400], styles.answer_text]}>{data.text}</Text>
      </View>
    </View>
  );
};

export default Answer;

var styles = StyleSheet.create({
  container: {
    paddingVertical: 17,
    width: '100%',
    borderRadius: 8,
    backgroundColor: colors.bg_color,
    paddingHorizontal: 17,
    marginBottom: 18,
  },
  header_box: {
    height: 35,
    width: '100%',
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
  tutor_name_box: {
    justifyContent: 'center',
    height: '50%',
  },
  tutor_name_text: {color: colors.sub, fontSize: 12.5},
  date_box: {
    height: '50%',
  },
  date_text: {
    fontFamily: fonts.montserrat_400,
    fontSize: 12.5,
    color: colors.light_gray,
  },
  answer_box: {paddingTop: 8},
  answer_text: {
    textAlign: 'auto',
    fontSize: 12.5,
    color: colors.sub,
    lineHeight: 20,
  },
});
