import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {View, Image, StyleSheet} from 'react-native';

import {colors, width, utils} from '../../../constants';

import {
  Remote,
  Step,
  Title,
  Explain,
  Heart,
  Review,
  Percent,
  Price,
  HashTag,
} from './index';
import {StarRating} from '../../common';
import {LectureListType} from '../../../types/data';

type Props = {
  data: LectureListType;
};

const Detail = ({data}: Props) => {
  const [price, setPrice] = useState(0);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const selectPrice = () => {
    const min = data.lecturePrices.reduce((acc, curr) => {
      return acc.pertimeCost > curr.pertimeCost ? curr : acc;
    });
    setPrice(min.pertimeCost);
  };
  useEffect(() => {
    selectPrice();
  }, [selectPrice]);

  return (
    <>
      <View style={styles.image}>
        <Image
          source={{uri: `${data.thumbnail}`}}
          resizeMode="contain"
          style={{width: '100%', height: 280, zIndex: 1}}
        />
        <View style={styles.tag}>{/* <Step tag={data.tag} /> */}</View>
      </View>
      <View style={styles.detail}>
        <View style={styles.remote}>
          <Remote remote={data.systemTypes} />
        </View>
        <View style={styles.title}>
          <Title title={data.title} />
        </View>
        <View style={styles.explain}>
          <Explain title={data.subTitle} />
        </View>
        <View style={styles.middle}>
          <View style={styles.count}>
            {/*  <View style={styles.heart}>
              <Heart heart={data.heart} />
            </View>
            <View style={styles.divider}>
              <WithLocalSvg asset={icons.line_vertical} />
            </View>*/}
            <View style={styles.star}>
              <StarRating rating={data.scoreAverage} size={11} />
            </View>
            <View style={styles.review}>
              <Review review={data.reviewCount} />
            </View>
          </View>
        </View>
        <View style={styles.bottom}>
          {/* <View style={styles.percent}>
            <Percent discount={data.discount} />
          </View> */}
          <View style={styles.price}>
            <Price price={price} />
          </View>
        </View>
        {/* <View>
          <View style={styles.hashTag}>
            <HashTag hashTag={data.hashtag} />
          </View>
        </View> */}
      </View>
    </>
  );
};
export default React.memo(Detail);

const styles = StyleSheet.create({
  image: {height: 280},
  tag: {
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
    width: 40,
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
