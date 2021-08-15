import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import Home from './Home';
import FreeBoard from './FreeBoard';
import MyPage from './MyPage';
import Chat from './Chat';
import {TabBar} from '../components/main';
import {colors} from '../constants';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      backBehavior="initialRoute"
      tabBarOptions={{
        activeTintColor: colors.main,
        keyboardHidesTabBar: true,
      }}
      tabBar={props => <TabBar {...props} />}>
      <Tab.Screen name="Home" component={Home} options={{tabBarLabel: '홈'}} />
      <Tab.Screen
        name="FreeBoard"
        component={FreeBoard}
        options={{tabBarLabel: '자유게시판'}}
      />
      <Tab.Screen
        name="Chat"
        component={Chat}
        options={{tabBarLabel: '채팅'}}
      />
      <Tab.Screen
        name="MyPage"
        component={MyPage}
        options={{tabBarLabel: '마이페이지'}}
      />
    </Tab.Navigator>
  );
};

export default Main;
