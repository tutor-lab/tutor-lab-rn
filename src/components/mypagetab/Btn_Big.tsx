import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  title: String;
  onPress: () => void;
  icon: string;
};

const Btn_Big = ({title, onPress, icon}: Props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={onPress}>
      <View style={styles.box}>
        <WithLocalSvg asset={icon} />
        <View style={styles.textWrapper}>
          <Text style={[fonts[400], styles.text]}>{title}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default Btn_Big;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  box: {
    borderRadius: 8,
    paddingTop: 14,
    paddingBottom: 10,
    backgroundColor: colors.main,
    width: '98%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textWrapper: {marginVertical: 5},
  text: {fontSize: 11, color: colors.white, lineHeight: 15.93},
});
