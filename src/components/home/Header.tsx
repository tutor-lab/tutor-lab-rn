import React from 'react';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, Text, StyleSheet} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {fonts, icons, colors} from '../../constants';

type Props = {alert: boolean};

const Header = ({alert}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <TouchableOpacity style={styles.address}>
          <Text style={[fonts[700], styles.text]}>서울시 관악구</Text>
          <WithLocalSvg asset={icons.down} />
        </TouchableOpacity>
      </View>
      <View style={styles.right}>
        {alert ? (
          <WithLocalSvg asset={icons.alert_dot} />
        ) : (
          <WithLocalSvg asset={icons.alert} />
        )}
      </View>
    </View>
  );
};
export default Header;

const styles = StyleSheet.create({
  container: {height: 34, flexDirection: 'row'},
  left: {flex: 1},
  address: {flex: 1, flexDirection: 'row', alignItems: 'center'},
  text: {fontSize: 15.5, color: colors.sub, marginRight: 10},
  right: {flex: 1, alignItems: 'flex-end', justifyContent: 'center'},
});
