import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, SafeAreaView} from 'react-native';
import {colors, width} from '../../constants';
import {
  Btn_Big,
  ListTitle,
  List,
  Profile,
  Version,
  Data,
} from '../../components/mypage';
import {Header, Line} from '../../components/common';

const MyPageScreen = () => {
  const version = '1.1.0';
  return (
    <SafeAreaView style={styles.container}>
      <Header.MyPage />
      <View style={styles.padding}>
        <Profile profile={Data.Profile} onPress={() => console.log('')} />
        <View style={styles.bigBtnWrapper}>
          {Data.Btn_Big.map(item => (
            <Btn_Big
              key={item.id}
              icon={item.icon}
              title={item.title}
              onPress={() => console.log(item.navigation)}
            />
          ))}
        </View>
      </View>
      <Line height={8} />
      <View style={styles.padding}>
        <ListTitle title={'계정정보'} />
        {Data.ListInfo.map(item => (
          <List
            key={item.id}
            title={item.title}
            onPress={() => console.log(item.navigation)}
          />
        ))}
        <ListTitle title={'TUTOR LAB'} />
        {Data.ListExtra.map(item => (
          <List
            key={item.id}
            title={item.title}
            onPress={() => console.log(item.navigation)}
          />
        ))}
        <Version title={'버전정보'} version={`${version}`} />
      </View>
    </SafeAreaView>
  );
};

export default MyPageScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {paddingHorizontal: width * 20},
  bigBtnWrapper: {flexDirection: 'row', marginTop: 21, marginBottom: 32},
});
