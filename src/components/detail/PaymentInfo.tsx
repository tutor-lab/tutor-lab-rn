import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, Image, StyleSheet} from 'react-native';

import {TutorBox} from '../../components/common';
import {colors, fonts, width} from '../../constants';

type Props = {
  info: {
    title: string;
    tutor: string;
    subject: {id: number; krSubject: string; parent: string}[];
    thumbnail:string;
    lectureTutor:{
      lectureCount:number;
      nickname:string;
      reviewCount:number;
    }
  };
  
};

const PaymentInfo = ({info}: Props) => {
  console.log('info',info)
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={{uri:info.thumbnail}}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <View style={styles.titleWrapper}>
          <Text style={[fonts[400], styles.text]}>{info.title}</Text>
        </View>
        <View style={styles.subject}>
          {info.subject.map(item => (
            <Text key={item.id} style={[fonts[400], styles.text]}>
              {item.krSubject}{' '}
            </Text>
          ))}
        </View>
        <View style={styles.tutorContainer}>
          <TutorBox />
          <View style={{marginLeft: 8}}>
            <Text style={[fonts[500], styles.tutorName]}>{info.lectureTutor.nickname}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};
export default PaymentInfo;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 32,
    paddingHorizontal: width * 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {height: 64, width: 64},
  image: {width: '100%', height: '100%', borderRadius: 8},
  textContainer: {
    justifyContent: 'flex-start',
    paddingLeft: 12,
  },
  titleWrapper: {flex: 1, height: '100%'},
  text: {fontSize: 14, color: colors.sub},
  tutorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  subject: {flexDirection: 'row', flex: 1, height: '100%'},
  tutorText: {fontSize: 12, color: colors.red},
  tutorName: {fontSize: 12, color: colors.sub},
});
