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
} from '../../components/mypagetab';
import {Header, Line, Data} from '../../components/common';

type Props = {navigation: any};

const MyPageTabScreen = ({navigation}: Props) => {
  const version = '1.1.0';
  return (
    <SafeAreaView style={styles.container}>
      <Header.MyPageTab />
      <View style={styles.padding}>
        <Profile
          profile={Data.MypageProfile}
          onPress={() =>
            navigation.navigate('MyPage', {screen: 'ChangeProfile'})
          }
        />
        <View style={styles.bigBtnWrapper}>
          {Data.MypageBtn_BigData.map(item => (
            <Btn_Big
              key={item.id}
              icon={item.icon}
              title={item.title}
              onPress={() =>
                navigation.navigate('MyPage', {
                  screen: `${item.navigation}`,
                })
              }
            />
          ))}
        </View>
      </View>
      <Line height={8} />
      <View style={styles.padding}>
        <ListTitle title={'계정정보'} />
        {Data.MypageListInfoData.map(item => (
          <List
            key={item.id}
            list={item}
            onPress={() => {
              item.navigation === 'ClassReview'
                ? navigation.navigate(item.navigation)
                : navigation.navigate('MyPage', {screen: `${item.navigation}`});
            }}
          />
        ))}
        <ListTitle title={'TUTOR LAB'} />
        {Data.MypageListExtraData.map(item => (
          <List
            key={item.id}
            list={item}
            onPress={() =>
              navigation.navigate('MyPage', {screen: `${item.navigation}`})
            }
          />
        ))}
        <Version title={'버전정보'} version={`${version}`} />
      </View>
    </SafeAreaView>
  );
};

export default MyPageTabScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {paddingHorizontal: width * 20},
  bigBtnWrapper: {flexDirection: 'row', marginTop: 21, marginBottom: 32},
});
