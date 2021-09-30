import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {width, icons} from '../../../constants';
import {Container} from './index';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  navigation: any;
  //  홈 아이콘 클릭시?
};

const TutorInfo = ({navigation}: Props) => {
  return (
    <Container>
      <View style={styles.padding}>
        <View style={styles.left}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => navigation.goBack()}>
            <WithLocalSvg asset={icons.back_arrow} />
          </TouchableOpacity>
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => console.log('HomeTab')}>
            <WithLocalSvg asset={icons.home_unselected} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default TutorInfo;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 20, flexDirection: 'row'},
  left: {flexDirection: 'row', flex: 1},
  right: {flexDirection: 'row', justifyContent: 'flex-end', flex: 1},
});
