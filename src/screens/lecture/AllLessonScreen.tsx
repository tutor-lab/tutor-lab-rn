import React from 'react';
import {View, StyleSheet, ScrollView, Text, Image} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';

import {width, icons, fonts, colors} from '../../constants';
import {Chip, Data, Category, Card} from '../../components/lecture';
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
        <View style={styles.category}>
          {Data.CategoryData.map(data => (
            <View key={data.id} style={styles.categoryBox}>
              <Category data={data} />
            </View>
          ))}
        </View>
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
        <View style={styles.cardSection}>
          {Data.CardData.map(data => (
            <Card key={data.id} data={data} />
          ))}
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
  category: {height: 88, flexDirection: 'row'},
  categoryBox: {flex: 1},
  scrollView: {flexGrow: 1},
  middle: {flexDirection: 'row', alignItems: 'center'},
  countBox: {flex: 1, flexDirection: 'row', alignItems: 'flex-end'},
  countText: {fontFamily: fonts.medium, fontSize: 14, color: '#6A6A6A'},
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
  sortText: {marginLeft: 10, fontFamily: fonts.medium, color: '#6A6A6A'},
  cardSection: {paddingTop: 15, flexDirection: 'row', flexWrap: 'wrap'},
});
