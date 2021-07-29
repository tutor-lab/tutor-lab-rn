import 'react-native-gesture-handler';
import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  View,
  Dimensions,
  StyleSheet,
  Animated,
} from 'react-native';
import {MaterialTopTabBarProps} from '@react-navigation/material-top-tabs';
import {Tab, Header} from '../main';
import {colors} from '../../constants';

type Route = {
  key: string;
  name: string;
  params?: object | undefined;
};

const TabBar = ({state, descriptors, navigation}: MaterialTopTabBarProps) => {
  const [translateValue] = useState(new Animated.Value(0));
  const [width, setWidth] = useState(0);
  const [toValue, setToValue] = useState(0);
  console.log(width);
  console.log(translateValue);

  useEffect(() => {
    Animated.spring(translateValue, {
      toValue,
      damping: 10,
      mass: 1,
      stiffness: 100,
      overshootClamping: true,
      restDisplacementThreshold: 0.001,
      restSpeedThreshold: 0.001,
      useNativeDriver: true,
    }).start();
  }, [state, translateValue, toValue]);

  return (
    <SafeAreaView style={styles.container}>
      <Header />
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
              label={label}
              onPress={onPress}
              setToValue={setToValue}
              setWidth={setWidth}
            />
          );
        })}
      </View>
    </SafeAreaView>
  );
};

export default TabBar;

const styles = StyleSheet.create({
  container: {height: 98, backgroundColor: colors.white, width: '100%'},
  tabWrapper: {flexDirection: 'row', height: 46, width: '100%'},
  bottomLine: {
    backgroundColor: colors.main1,
    height: 2,
    width: '100%',
  },
});
