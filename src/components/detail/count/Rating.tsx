import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';

import {icons} from '../../../constants';

type Props = {rating: number};

const Rating = ({rating}: Props) => {
  return (
    <View style={styles.container}>
      <WithLocalSvg asset={icons.star_blank} height={16} width={16} />
      <WithLocalSvg asset={icons.star_blank} height={16} width={16} />
      <WithLocalSvg asset={icons.star_blank} height={16} width={16} />
      <WithLocalSvg asset={icons.star_blank} height={16} width={16} />
      <WithLocalSvg asset={icons.star_blank} height={16} width={16} />
    </View>
  );
};

export default Rating;

var styles = StyleSheet.create({
  container: {
    marginTop: 2,
    height: 16,
    width: 80,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
