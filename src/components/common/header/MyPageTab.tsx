import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {width, icons} from '../../../constants';
import {Container, Title} from './index';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  //  홈 아이콘 클릭시?
};

const MyPageTab = ({}: Props) => {
  return (
    <Container>
      <View style={styles.padding}>
        <View style={styles.left}>
          <Title title={'마이페이지'} fontSize={18} />
        </View>
        <View style={styles.right}>
          <TouchableOpacity activeOpacity={1} style={{}}>
            <WithLocalSvg asset={icons.alert_dot} />
          </TouchableOpacity>
          <TouchableOpacity activeOpacity={1} style={{marginLeft: 15}}>
            <WithLocalSvg asset={icons.setting} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default MyPageTab;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 20, flexDirection: 'row'},
  left: {flexDirection: 'row', flex: 1},
  tutorBoxWrapper: {marginLeft: 18, marginRight: 8},
  right: {flexDirection: 'row', justifyContent: 'flex-end', flex: 1},
});
