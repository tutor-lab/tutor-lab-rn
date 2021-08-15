import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WithLocalSvg} from 'react-native-svg/src';
import {fonts, icons, colors, width} from '../../constants';

type Props = {
  navigation: any;
  data: {
    id: number;
    stack: string[];
    title: string;
    tutor: string;
    cost: string;
    hashTag: string[];
    heart: number;
    reviewCount: string;
  };
};

const Card = ({navigation, data}: Props) => {
  return (
    <View
      style={[
        styles.container,
        data.id % 2 === 0
          ? {alignItems: 'flex-start'}
          : {alignItems: 'flex-end'},
      ]}>
      <TouchableOpacity
        onPress={() => navigation.navigate('LectureDetail')}
        activeOpacity={1}
        style={styles.cardContainer}>
        <View style={styles.cardImageContainer}>
          <Image
            source={require('../../assets/images/card_image.png')}
            resizeMode="stretch"
            style={styles.cardImage}
          />
        </View>
        <View style={styles.cardTextContainer}>
          <View style={styles.cardChipsContainer}>
            {data.stack.map(text => (
              <View key={text} style={styles.cardChipsBox}>
                <Text style={styles.cardChipsText}>{text}</Text>
              </View>
            ))}
          </View>
          <View style={styles.cardTitleBox}>
            <Text style={styles.cardTitleText}>{data.title}</Text>
          </View>
          <View style={styles.cardTutorBox}>
            <Text style={styles.cardText}>튜터{'  '}</Text>
            <Text style={[styles.cardText, {fontFamily: fonts.medium}]}>
              {data.tutor}
            </Text>
          </View>
          <View style={styles.cardTimeBox}>
            <Text style={styles.cardText}>{data.cost}</Text>
            <Text style={styles.cardText}>원 / </Text>
            <Text style={[styles.cardText, {fontFamily: fonts.medium}]}>
              시간당
            </Text>
          </View>
          <View style={styles.cardHashTagBox}>
            {data.hashTag.map(text => (
              <Text key={text} style={styles.cardHashTagText}>
                {text}
              </Text>
            ))}
          </View>
          <View style={styles.cardFooter}>
            <View style={styles.cardFooterBox}>
              <WithLocalSvg asset={icons.heart_red} />
              <Text style={styles.cardFooterText}>
                {'  '}
                {data.heart}
              </Text>
            </View>
            <View style={styles.cardFooterBox}>
              <Text style={styles.cardFooterText}>리뷰{'  '}</Text>
              <Text style={styles.cardFooterText}>{data.reviewCount}</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Card;

const styles = StyleSheet.create({
  container: {width: '50%', height: 300, marginBottom: 21},
  cardContainer: {
    height: '100%',
    width: width * 158,
    borderWidth: 0.25,
    borderRadius: 10,
    borderColor: colors.dim_gray,
  },
  cardImageContainer: {flex: 2},
  cardImage: {height: '100%', width: '100%'},
  cardTextContainer: {
    flex: 3.2,
    paddingHorizontal: 12,
  },
  cardChipsContainer: {
    flex: 2,
    alignItems: 'center',
    flexDirection: 'row',
  },
  cardChipsBox: {
    borderColor: '#979797',
    borderRadius: 21,
    borderWidth: 0.5,
    height: 18,
    justifyContent: 'center',
    paddingHorizontal: 5,
    marginRight: 5,
  },
  cardChipsText: {fontFamily: fonts.medium, fontSize: 9, color: '#8E8E8E'},
  cardTitleBox: {flex: 3},
  cardTitleText: {
    fontFamily: fonts.Bold,
    fontSize: 14,
    color: colors.dim_gray,
    lineHeight: 20,
  },
  cardTutorBox: {flexDirection: 'row', flex: 1.2, alignItems: 'center'},
  cardText: {fontFamily: fonts.Bold, fontSize: 12, color: colors.dim_gray},
  cardTimeBox: {flexDirection: 'row', flex: 1.2, alignItems: 'center'},
  cardHashTagBox: {flexDirection: 'row', flex: 1.5, alignItems: 'flex-end'},
  cardHashTagText: {fontFamily: fonts.regular, fontSize: 9, color: '#A9A9A9'},
  cardFooter: {flexDirection: 'row', flex: 2, alignItems: 'center'},
  cardFooterBox: {flexDirection: 'row', alignItems: 'center', flex: 1},
  cardFooterText: {
    fontFamily: fonts.medium,
    fontSize: 12,
    color: '#939393',
  },
});
