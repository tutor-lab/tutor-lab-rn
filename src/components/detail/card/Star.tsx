import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';
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
      <WithLocalSvg asset={icons.star} height={11.5} width={11.5} />
      <WithLocalSvg asset={icons.star} height={11.5} width={11.5} />
      <WithLocalSvg asset={icons.star} height={11.5} width={11.5} />
      <WithLocalSvg asset={icons.star} height={11.5} width={11.5} />
      <WithLocalSvg asset={icons.star} height={11.5} width={11.5} />
    </>
  );
};
export default Star;

const styles = StyleSheet.create({
  container: {flexDirection: 'row', alignItems: 'center'},
});
