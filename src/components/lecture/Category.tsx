import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {fonts, colors, icons, width} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  explain: string;
  text: String;
  onPress: () => void;
};

const Category = ({explain, text, onPress}: Props) => {
  return (
    <TouchableOpacity activeOpacity={1} onPress={onPress} style={styles.card}>
      <View style={styles.textBox}>
        <Text style={styles.explain}>{explain}</Text>
        <Text style={styles.text}>{text}</Text>
      </View>
      <View style={styles.iconBox}>
        <WithLocalSvg asset={icons.category_arrow} />
      </View>
    </TouchableOpacity>
  );
};

export default Category;

const styles = StyleSheet.create({
  card: {
    height: 58,
    width: '95%',
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
