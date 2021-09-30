import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeTab from './HomeTab';
import FreeBoardTab from './FreeBoardTab';
import MyPageTab from './MyPageTab';
import ChatTab from './ChatTab';
import {TabBar} from '../components/main';
import {colors} from '../constants';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: colors.main,
        keyboardHidesTabBar: true,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="HomeTab"
        component={HomeTab}
        options={{tabBarLabel: '홈'}}
      />
      <Tab.Screen
        name="FreeBoardTab"
        component={FreeBoardTab}
        options={{tabBarLabel: '자유게시판'}}
      />
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
