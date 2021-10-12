import 'react-native-gesture-handler';
import React from 'react';
import {SafeAreaView, View, StyleSheet} from 'react-native';
import {BottomTabBarProps} from '@react-navigation/bottom-tabs';
import Tab from './Tab';
import {colors} from '../../constants';

type Route = {
  key: string;
  name: string;
  params?: object | undefined;
};

const TabBar = ({state, descriptors, navigation}: BottomTabBarProps) => {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.tabWrapper}>
        {state.routes.map((route: Route, index: number) => {
          const {options} = descriptors[route.key];
          const label = options.tabBarLabel;
          const isFocused = state.index === index;

          const onPress = () => {
            const event = navigation.emit({
              type: 'tabPress',
              target: route.key,
              canPreventDefault: true,
            });

            if (!isFocused && !event.defaultPrevented) {
              navigation.navigate(route.name);
            }
          };

          return (
            <Tab
              isFocused={isFocused}
              key={`tab_${index}`}
              index={index}
              label={label}
              onPress={onPress}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {
    position: 'absolute',
    bottom: 0,
    paddingTop: 15.5,
    paddingBottom: 12,
    backgroundColor: colors.white,
    width: '100%',
  },
  tabWrapper: {
    flexDirection: 'row',
    height: '100%',
    width: '100%',
    alignItems: 'center',
  },
});
