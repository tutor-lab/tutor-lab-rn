import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {width, icons, fonts, colors} from '../../constants';
import {Chip, Data, CategoryList} from '../../components/lecture';
import {StackNavigationProp} from '@react-navigation/stack';
import {WithLocalSvg} from 'react-native-svg/src';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
}

const AllLessonScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <ScrollView horizontal>
          {Data.ChipListData.map(data => (
            <View key={data.id} style={styles.chips}>
              <Chip text={data.text} onPress={() => console.log('강의')} />
            </View>
          ))}
        </ScrollView>
      </View>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <CategoryList data={Data.CategoryData} />
        <View style={styles.middle}>
          <View style={styles.countBox}>
            <Text style={styles.countText}>총 </Text>
            <Text style={[styles.countText, {fontFamily: fonts.Bold}]}>67</Text>
            <Text style={styles.countText}>개의 강의</Text>
          </View>
          <View style={styles.sortContainer}>
            <TouchableOpacity
              style={styles.sortBox}
              activeOpacity={1}
              onPress={() => console.log('리뷰 순')}>
              <WithLocalSvg asset={icons.category_menu} />
              <Text style={styles.sortText}>리뷰순</Text>
            </TouchableOpacity>
          </View>
        </View>
        <View style={{paddingVertical: 15}}>
          <TouchableOpacity
            activeOpacity={1}
            style={{
              height: 295,
              width: '47%',
              borderWidth: 1,
              borderRadius: 10,
              borderColor: '#6A6A6A',
            }}>
            <View style={{flex: 2}}>
              <Image
                source={require('../../assets/images/card_image.png')}
                resizeMode="stretch"
                style={{
                  height: '100%',
                  width: '100%',
                }}
              />
            </View>
            <View
              style={{
                flex: 3.2,
                paddingTop: 6,
                paddingBottom: 11,
                paddingHorizontal: 12,
              }}>
              <View>
                <View
                  style={{
                    borderColor: '#979797',
                    borderRadius: 21,
                    borderWidth: 0.5,
                    height: 18,
                    justifyContent: 'center',
                    paddingHorizontal: 5,
                    width: undefined,
                  }}>
                  <Text
                    style={{
                      fontFamily: fonts.medium,
                      fontSize: 9,
                      color: '#8E8E8E',
                    }}>
                    Python
                  </Text>
                </View>
              </View>
              <View>
                <Text
                  style={{
                    fontFamily: fonts.Bold,
                    fontSize: 14,
                    color: '#6A6A6A',
                  }}>
                  취업이 빨라지는 개발 교육 첫단계
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: fonts.Bold,
                    fontSize: 12,
                    color: '#6A6A6A',
                  }}>
                  튜터
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.medium,
                    fontSize: 12,
                    color: '#6A6A6A',
                  }}>
                  김하나
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: fonts.Bold,
                    fontSize: 12,
                    color: '#6A6A6A',
                  }}>
                  33,000원 /{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.medium,
                    fontSize: 12,
                    color: '#6A6A6A',
                  }}>
                  시간당
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 9,
                    color: '#A9A9A9',
                  }}>
                  # 회사 10년 근무
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.regular,
                    fontSize: 9,
                    color: '#A9A9A9',
                  }}>
                  # sw개발 및 품질 경력
                </Text>
              </View>
              <View style={{flexDirection: 'row'}}>
                <WithLocalSvg asset={icons.heart} />
                <Text
                  style={{
                    fontFamily: fonts.medium,
                    fontSize: 12,
                    color: '#939393',
                  }}>
                  1995
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.medium,
                    fontSize: 12,
                    color: '#939393',
                  }}>
                  리뷰
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.medium,
                    fontSize: 12,
                    color: '#939393',
                  }}>
                  100+
                </Text>
              </View>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default AllLessonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width * 17,
  },
  chipContainer: {height: 69},
  chips: {justifyContent: 'center', paddingRight: 10},
  scrollView: {flexGrow: 1},
  middle: {flexDirection: 'row', alignItems: 'center'},
  countBox: {flex: 1, flexDirection: 'row', alignItems: 'flex-end'},
  countText: {
    fontFamily: fonts.medium,
    fontSize: 14,
    color: '#6A6A6A',
  },
  sortContainer: {flex: 1, alignItems: 'flex-end'},
  sortBox: {
    flexDirection: 'row',
    height: 29,
    borderRadius: 3,
    alignItems: 'center',
    paddingHorizontal: 11,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    width: 92,
  },
  sortText: {
    marginLeft: 10,
    fontFamily: fonts.medium,
    color: '#6A6A6A',
  },
});
