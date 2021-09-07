import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, Image, StyleSheet} from 'react-native';
import {colors, fonts, width} from '../../constants';

type Props = {
  info: {
    title: string;
    tutor: string;
    subject: {id: number; krSubject: string; parent: string}[];
  };
};

const PaymentInfo = ({info}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageWrapper}>
        <Image
          source={require('../../assets/images/detail.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.textWrapper}>
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
        <View style={styles.tutorWrapper}>
          <View style={styles.tutorTag}>
            <Text style={[fonts[500], styles.tutorText]}>튜터</Text>
          </View>
          <Text style={[fonts[500], styles.tutorName]}>{info.tutor}</Text>
        </View>
      </View>
    </View>
  );
};
export default PaymentInfo;

const styles = StyleSheet.create({
  container: {
    height: 128,
    paddingHorizontal: width * 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  imageWrapper: {height: 64, width: 64},
  image: {width: '100%', height: '100%', borderRadius: 8},
  textWrapper: {height: 64, justifyContent: 'flex-start', paddingLeft: 12},
  titleWrapper: {flex: 1, height: '100%'},
  text: {fontSize: 14, color: colors.sub},
  tutorWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 1,
    height: '100%',
  },
  tutorTag: {
    backgroundColor: 'rgba(238, 90, 90, 0.1)',
    height: 22,
    width: 39,
    borderRadius: 8,
    alignItems: 'center',
  },
  subject: {flexDirection: 'row', flex: 1, height: '100%'},
  tutorText: {fontSize: 12, color: colors.red},
  tutorName: {fontSize: 12, color: colors.sub},
});
