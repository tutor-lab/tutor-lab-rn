import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, icons, colors} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  item: {id: number; text: string; isSelected: boolean};
  onPress: any;
};

const CheckBox = ({item, onPress}: Props) => {
  return (
    <TouchableOpacity
      key={item.id}
      activeOpacity={1}
      style={styles.container}
      onPress={onPress}>
      <View
        style={[
          styles.checkBox,
          item.isSelected
            ? {borderColor: colors.main, backgroundColor: colors.main}
            : {borderColor: colors.line, backgroundColor: colors.white},
        ]}>
        {item.isSelected ? (
          <WithLocalSvg asset={icons.paymentList_checked} />
        ) : (
          <WithLocalSvg asset={icons.paymentList_unchecked} />
        )}
      </View>
      <Text style={[fonts[400], styles.text]}>{item.text}</Text>
    </TouchableOpacity>
  );
};

export default CheckBox;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 14,
  },
  checkBox: {
    height: 24,
    width: 24,
    borderRadius: 50,
    borderWidth: 1,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 18,
  },
  text: {fontSize: 13, lineHeight: 15.5},
});
