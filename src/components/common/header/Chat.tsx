import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {width, icons} from '../../../constants';
import {Container, Title} from './index';
import {TutorBox} from '../index';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  navigation: any;
  title: string;
  //   서치, 메뉴 아이콘 클릭시
};

const Chat = ({navigation, title}: Props) => {
  return (
    <Container>
      <View style={styles.padding}>
        <View style={styles.left}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <WithLocalSvg asset={icons.back_arrow} />
          </TouchableOpacity>
          <View style={styles.tutorBoxWrapper}>
            <TutorBox />
          </View>
          <Title title={title} fontSize={16} />
        </View>
        <View style={styles.right}>
          <TouchableOpacity
            onPress={() => console.log('search')}
            activeOpacity={1}>
            <WithLocalSvg asset={icons.search} />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => console.log('menu')}
            activeOpacity={1}
            style={{marginLeft: 20}}>
            <WithLocalSvg asset={icons.more} />
          </TouchableOpacity>
        </View>
      </View>
    </Container>
  );
};

export default Chat;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 20, flexDirection: 'row'},
  left: {flexDirection: 'row', flex: 1},
  tutorBoxWrapper: {marginLeft: 18, marginRight: 8},
  right: {flexDirection: 'row', justifyContent: 'flex-end', flex: 1},
});
