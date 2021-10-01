import React from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';

import {colors, width} from '../../constants';
import {Header, Line} from '../../components/common';
import {NaviList, ImageSection, Data} from '../../components/editProfile';

type Props = {navigation: any};

const EditProfileScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header.Basic title={'프로필 수정'} navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <ImageSection />
        <Line height={8} />
        <View style={styles.padding}>
          <View style={styles.listWrapper}>
            {Data.ProfileInfoList.map(item => (
              <NaviList
                key={item.id}
                list={item}
                onPress={() =>
                  item.navigation === 'Logout'
                    ? console.log('토글 로그아웃')
                    : navigation.navigate(item.navigation)
                }
              />
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default EditProfileScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  scroll: {flexGrow: 1},
  padding: {paddingHorizontal: width * 20, alignItems: 'center'},
  listWrapper: {width: '100%', paddingVertical: 9},
});
