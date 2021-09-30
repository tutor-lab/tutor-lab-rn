import React from 'react';
import 'react-native-gesture-handler';
import {createStackNavigator} from '@react-navigation/stack';
import MyPageTabScreen from '../screens/main/MyPageTabScreen';

/*
tab             stack

프로필 수정       회원정보 수정,비밀번호 변경, 맞춤강의 설정, 로그아웃(onPress not stack), 회원탈퇴
                
                게시판 활동내역, 강의 요청, 설정

                공지사항, 이용약관, 문의하기
*/

const MyPageTab = () => {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator
      initialRouteName="MyPageTab"
      screenOptions={{headerShown: false}}>
      <Stack.Screen name="MyPageTab" component={MyPageTabScreen} />
    </Stack.Navigator>
  );
};

export default MyPageTab;
