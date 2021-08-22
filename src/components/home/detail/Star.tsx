import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {icons} from '../../../constants';

type Props = {rating: number};

const Star = ({rating}: Props) => {
  const star = () => {
    let rate = rating;
    while (rate > 0) {
      //
      rate = rate - 1;
    }
  };
  return (
    <>
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
      <WithLocalSvg asset={icons.star} />
    </>
  );
};
export default Star;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});
