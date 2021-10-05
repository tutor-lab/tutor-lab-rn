import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {icons, width} from '../../../constants';

type Props = {
  onPress: () => void;
};

const Header = ({onPress}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity activeOpacity={1} style={styles.btn} onPress={onPress}>
        <WithLocalSvg asset={icons.cancel} />
      </TouchableOpacity>
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: width * 16,
    alignItems: 'flex-end',
    width: '100%',
  },
  btn: {
    alignItems: 'flex-end',
  },
});
