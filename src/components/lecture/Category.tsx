import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {WithLocalSvg} from 'react-native-svg/src';
import {fonts, colors, icons, width} from '../../constants';

type Props = {
  data: {
    id: number;
    explain: string;
    text: string;
  };
};

const Category = ({data}: Props) => {
  return (
    <View
      style={[
        {flex: 1},
        data.id % 2 === 0
          ? {alignItems: 'flex-start'}
          : {alignItems: 'flex-end'},
      ]}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => console.log('카테고리 onPress')}
        style={styles.card}>
        <View style={styles.textBox}>
          <Text style={styles.explain}>{data.explain}</Text>
          <Text style={styles.text}>{data.text}</Text>
        </View>
        <View style={styles.iconBox}>
          <WithLocalSvg asset={icons.category_arrow} />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  category: {height: 88, flexDirection: 'row'},
  categoryBox: {flex: 1},
  card: {
    height: 58,
    width: width * 158,
    flexDirection: 'row',
    backgroundColor: colors.white,
    borderRadius: 3,
    borderColor: '#C2C2C2',
    borderWidth: 1,
    paddingHorizontal: width * 12,
    paddingVertical: width * 9,
  },
  textBox: {flex: 2},
  explain: {
    fontFamily: fonts.medium,
    color: '#6A6A6A',
    fontSize: 12,
  },
  text: {
    fontFamily: fonts.Bold,
    color: '#6A6A6A',
    fontSize: 14,
  },
  iconBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
});
