import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeTab from '../screens/main/HomeTabScreen';
import FreeBoardTab from '../screens/main/FreeBoardTabScreen';
import MyPageTab from '../screens/main/MyPageTabScreen';
import ChatTab from '../screens/main/ChatTabScreen';
import {TabBar} from '../components/main';

const Main = () => {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      backBehavior="initialRoute"
      screenOptions={{headerShown: false}}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{tabBarLabel: '홈'}}
      />
      {/* <Tab.Screen
        name="FreeBoardTab"
        component={FreeBoardTab}
        options={{tabBarLabel: '자유게시판'}}
      /> */}
      <Tab.Screen
        name="ChatTab"
        component={ChatTab}
        options={{tabBarLabel: '채팅'}}
      />
      <Tab.Screen
        name="MyPageTab"
        component={MyPageTab}
        options={{tabBarLabel: '마이페이지'}}
      />
    </Tab.Navigator>
  );
};

export default Main;
