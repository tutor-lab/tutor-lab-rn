import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {WithLocalSvg} from 'react-native-svg';
import {colors, icons} from '../constants';

import Lecture from './Lecture';
import FreeBoardScreen from '../screens/main/FreeBoardScreen';
import MypageScreen from '../screens/main/MypageScreen';

const Tab = createBottomTabNavigator();

const Main = () => {
  return (
    <Tab.Navigator
      initialRouteName="Lecture"
      tabBarOptions={{
        activeTintColor: colors.main1,
      }}
      sceneContainerStyle={{height: 100}}>
      <Tab.Screen
        name="Lecture"
        component={Lecture}
        options={{
          tabBarLabel: '강의',
          tabBarIcon: ({color}) => (
            <WithLocalSvg fill={color} asset={icons.lecture} />
          ),
        }}
      />
      <Tab.Screen
        name="FreeBoard"
        component={FreeBoardScreen}
        options={{
          tabBarLabel: '자유게시판',
          tabBarIcon: ({color}) => (
            <WithLocalSvg fill={color} asset={icons.free_board} />
          ),
        }}
      />
      <Tab.Screen
        name="MyPage"
        component={MypageScreen}
        options={{
          tabBarLabel: '마이페이지',
          tabBarIcon: ({color}) => (
            <WithLocalSvg fill={color} stroke={color} asset={icons.my_page} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default Main;
