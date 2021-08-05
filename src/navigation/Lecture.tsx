import React from 'react';
import 'react-native-gesture-handler';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {StackNavigationProp} from '@react-navigation/stack';
import AllLessonScreen from '../screens/lecture/AllLessonScreen';
import CustomLessonScreen from '../screens/lecture/CustomLessonScreen';
import {TabBar} from '../components/main';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
}

const LectureScreen = ({}: Props) => {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator tabBar={props => <TabBar {...props} />}>
      <Tab.Screen
        name="AllLesson"
        component={AllLessonScreen}
        options={{tabBarLabel: '모든 강의'}}
      />
      <Tab.Screen
        name="CustomLesson"
        component={CustomLessonScreen}
        options={{tabBarLabel: '맞춤 강의'}}
      />
    </Tab.Navigator>
  );
};

export default LectureScreen;
