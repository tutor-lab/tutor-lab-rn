import React, {memo} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, TouchableOpacity, Image} from 'react-native';
import {fonts, colors} from '../../constants';
import {Commonstyles, Line} from '../../components/common';
import {Item} from 'react-native-paper/lib/typescript/components/List/List';

type Props = {
  data: any;
  navigation: any;
};
const WriteCard = ({data, navigation}: Props) => {
  return (
    <View>
      <View style={[Commonstyles.padding, styles.padding, styles.row]}>
        <View style={styles.leftSection}>
          <View style={styles.imageWrapper}>
            <Image
              source={{uri: `${data.item.thumbnail}`}}
              resizeMode={'cover'}
              style={styles.image}
            />
          </View>
          <View style={styles.textSection}>
            <Text style={[fonts[400], styles.text, {color: colors.light_gray}]}>
              {data.item.lectureTutor.nickname}
            </Text>
            <Text
              style={[fonts[400], styles.text]}
              numberOfLines={2}
              ellipsizeMode="tail">
              {data.item.title}
            </Text>
            <View style={{flexDirection: 'row'}}>
              {data.item.systemTypes.map((list: any, index: number) => (
                <Text
                  key={index}
                  style={[fonts[400], styles.text, {color: colors.light_gray}]}>
                  {list.name}{' '}
                </Text>
              ))}
              <Text
                style={[fonts[400], styles.text, {color: colors.light_gray}]}>
                /
              </Text>
              {data.item.lecturePrices.map((list: any) => (
                <Text
                  key={list}
                  style={[fonts[400], styles.text, {color: colors.light_gray}]}>
                  {' '}
                  {list.isGroupStr}{' '}
                </Text>
              ))}
            </View>
          </View>
        </View>
        <View style={styles.rightSection}>
          <TouchableOpacity
            style={styles.writeBtn}
            onPress={() =>
              navigation.navigate('ReviewWrite', {
                id: data.item.id,
                thumbnail: data.item.thumbnail,
                title: data.item.title,
                nickname: data.item.lectureTutor.nickname,
                systemTypes: data.item.systemTypes[0],
                lecturePrices: data.item.lecturePrices[0],
                lectureSubjects: data.item.lectureSubjects,
              })
            }>
            <Text style={[fonts[700], {color: colors.main, fontSize: 13}]}>
              후기작성
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <Line height={8} />
    </View>
  );
};

export default memo(WriteCard);

const styles = StyleSheet.create({
  padding: {paddingVertical: 15},
  row: {flexDirection: 'row', alignItems: 'center'},
  date: {
    fontFamily: fonts.montserrat_600,
    fontSize: 15,
    color: colors.sub,
  },
  imageWrapper: {
    height: 70,
    width: 70,
    borderRadius: 6,
  },
  image: {height: '100%', width: '100%', borderRadius: 6},
  text: {fontSize: 12},
  leftSection: {flex: 3, flexDirection: 'row'},
  textSection: {marginLeft: 12, flex: 1},
  rightSection: {flex: 1, alignItems: 'flex-end'},
  writeBtn: {
    borderRadius: 6,
    borderWidth: 1,
    borderColor: colors.main,
    paddingVertical: 6,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 11,
  },
});
