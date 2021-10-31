import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, TouchableOpacity} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';

import {icons} from '../../constants';

type Props = {
  star: {id: number; isSelected: boolean};
  onSelectStar: (value: {id: number; isSelected: boolean}) => void;
};

const StarSelect = ({star, onSelectStar}: Props) => {
  return (
    <TouchableOpacity
      style={styles.wrapper}
      activeOpacity={1}
      onPress={() => onSelectStar(star)}>
      {star.isSelected ? (
        <WithLocalSvg asset={icons.star} height={40} width={40} />
      ) : (
        <WithLocalSvg asset={icons.star_blank} height={40} width={40} />
      )}
    </TouchableOpacity>
  );
};

export default StarSelect;

const styles = StyleSheet.create({
  wrapper: {flex: 1, justifyContent: 'center'},
});
