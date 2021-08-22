import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {View, SafeAreaView, ScrollView, StyleSheet, Image} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, width, icons} from '../../constants';
import {Data, Detail, Tutor} from '../../components/home';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Detail data={Data.Detail} />
        <View style={styles.line} />
        <Tutor data={Data.Detail} />
        <View style={[styles.line, {height: 5}]} />
      </ScrollView>
    </SafeAreaView>
  );
};

export default DetailScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  tagBox: {
    width: '100%',
    paddingHorizontal: 16,
    position: 'relative',
    zIndex: 2,
    marginTop: -45,
    flexDirection: 'row',
  },
  detail: {paddingHorizontal: width * 20, marginBottom: 33},
  remote: {
    alignItems: 'center',
    flexDirection: 'row',
    height: 25,
    marginTop: 16,
  },
  title: {marginTop: 12},
  explain: {marginTop: 12},
  middle: {
    marginTop: 20,
    height: 25,
  },
  count: {flexDirection: 'row', alignItems: 'center', height: '100%'},
  heart: {flexDirection: 'row', alignItems: 'center'},
  divider: {marginHorizontal: 8},
  star: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 60,
  },
  review: {flexDirection: 'row', alignItems: 'center', paddingLeft: 4},
  bottom: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 8,
    height: 28,
  },
  percent: {
    flexDirection: 'row',
    alignItems: 'center',
    width: 35,
    justifyContent: 'flex-start',
  },
  price: {
    marginLeft: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  hashTag: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignItems: 'center',
    marginTop: 15,
  },
  line: {
    height: 1,
    backgroundColor: colors.line,
    width: '100%',
  },
});
