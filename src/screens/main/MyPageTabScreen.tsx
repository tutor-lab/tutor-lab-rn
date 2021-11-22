import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {useDispatch, useSelector} from 'react-redux';
import {View, StyleSheet, SafeAreaView, ScrollView} from 'react-native';

import {colors, width} from '../../constants';
import {
  Btn_Big,
  ListTitle,
  List,
  Profile,
  Version,
} from '../../components/mypagetab';
import {Header, Line, Data} from '../../components/common';
import {getUserInfoRequest} from '../../redux/reducers/user';

type Props = {navigation: any};

const MyPageTabScreen = ({navigation}: Props) => {
  const version = '1.1.0';
  const dispatch = useDispatch();
  const {userInfo} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUserInfoRequest());
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header.Main title={'마이페이지'} />
      <ScrollView>
        <View style={styles.padding}>
          <Profile
            userInfo={userInfo}
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
                onPress={() => navigation.navigate(`${item.navigation}`)}
              />
            ))}
          </View>
        </View>
        <Line height={8} />
        <View style={styles.padding}>
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
      </ScrollView>
    </SafeAreaView>
  );
};

export default MyPageTabScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {paddingHorizontal: width * 20},
  bigBtnWrapper: {flexDirection: 'row', marginTop: 21, marginBottom: 32},
});
