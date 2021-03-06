import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useSelector} from 'react-redux';

import {colors, width} from '../../constants';
import {Header, Line} from '../../components/common';
import {
  NaviList,
  ImageSection,
  Modals,
  Data,
} from '../../components/editprofile';

type Props = {navigation: any};

const EditProfileListScreen = ({navigation}: Props) => {
  const [profileImage, setProfileImage] = useState(null);
  const [modal, setModal] = useState<boolean>(false);
  const {userInfo} = useSelector(state => state.user);

  const logout = () => {
    setModal(false);
    AsyncStorage.removeItem('accessToken');
    navigation.replace('Login', {screen: 'LoginIntro'});
  };

  useEffect(() => {
    setProfileImage(userInfo.image);
  }, [userInfo]);

  return (
    <SafeAreaView style={styles.container}>
      <Header.Basic title={'프로필 수정'} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <ImageSection profileImage={profileImage} />
        <Line height={8} />
        <View style={styles.padding}>
          <View style={styles.listWrapper}>
            {Data.ProfileInfoList.map(item => (
              <NaviList
                key={item.id}
                list={item}
                onPress={() =>
                  item.navigation === 'Logout'
                    ? setModal(true)
                    : navigation.navigate(item.navigation)
                }
              />
            ))}
          </View>
        </View>
        <Modals.Container visible={modal} setVisible={setModal}>
          <Modals.Title text={'로그아웃'} />
          <Modals.Description text={'로그아웃을 하시겠습니까?'} />
          <Modals.TwoBtn
            onPressCancel={() => setModal(false)}
            onPressOk={() => logout()}
            textCancel={'아니요'}
            textOk={'예'}
          />
        </Modals.Container>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileListScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {flexGrow: 1},
  padding: {paddingHorizontal: width * 20, alignItems: 'center'},
  listWrapper: {width: '100%', paddingVertical: 9},
});
