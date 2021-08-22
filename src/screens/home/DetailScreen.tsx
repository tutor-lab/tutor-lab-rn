import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';

import {fonts, colors, width, icons} from '../../constants';
import {Data, Detail} from '../../components/home';
import {TouchableOpacity} from 'react-native-gesture-handler';

const DetailScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={{height: 280}}>
          <Image
            source={require('../../assets/images/detail.png')}
            resizeMode="cover"
            style={{width: '100%', height: 280, zIndex: 1}}
          />
          <View style={styles.tagBox}>
            <Detail.Step tag={Data.Detail.tag} />
          </View>
        </View>
        <View style={styles.detail}>
          <View style={styles.remote}>
            <Detail.Remote remote={Data.Detail.remote} />
          </View>
          <View style={styles.title}>
            <Detail.Title title={Data.Detail.title} />
          </View>
          <View style={styles.explain}>
            <Detail.Explain title={Data.Detail.explain} />
          </View>
          <View style={styles.middle}>
            <View style={styles.count}>
              <View style={styles.heart}>
                <Detail.Heart heart={Data.Detail.heart} />
              </View>
              <View style={styles.divider}>
                <WithLocalSvg asset={icons.line_vertical} />
              </View>
              <View style={styles.star}>
                <Detail.Star rating={Data.Detail.rating} />
              </View>
              <View style={styles.review}>
                <Detail.Review review={Data.Detail.review} />
              </View>
            </View>
          </View>
          <View style={styles.bottom}>
            <View style={styles.percent}>
              <Detail.Percent discount={Data.Detail.discount} />
            </View>
            <View style={styles.price}>
              <Detail.Price price={Data.Detail.price} />
            </View>
          </View>
          <View>
            <View style={styles.hashTag}>
              <Detail.HashTag hashTag={Data.Detail.hashtag} />
            </View>
          </View>
        </View>
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
});
