import React, {useState} from 'react';
import {View, StyleSheet, Pressable, Easing, Animated} from 'react-native';
import {colors} from '../../constants';

type Props = {
  onPress: () => void;
  enabled: boolean;
  onColor?: string;
  offColor?: string;
};

const Switch = ({
  onPress,
  enabled,
  onColor = colors.main,
  offColor = colors.line,
}: Props) => {
  const [aniValue, setAniValue] = useState(new Animated.Value(0));
  const color = enabled ? onColor : offColor;

  const moveSwitchToggle = aniValue.interpolate({
    inputRange: [0, 1],
    outputRange: [0, 20],
  });

  Animated.timing(aniValue, {
    toValue: enabled ? 1 : 0,
    duration: 200,
    easing: Easing.linear,
    useNativeDriver: true,
  }).start();

  return (
    <View style={styles.container}>
      <Pressable onPress={onPress}>
        <View style={[styles.toggleWrapper, {backgroundColor: color}]}>
          <Animated.View
            style={[
              styles.wheel,
              {transform: [{translateX: moveSwitchToggle}]},
            ]}
          />
        </View>
      </Pressable>
    </View>
  );
};

export default Switch;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  toggleWrapper: {
    width: 38,
    height: 20,
    paddingLeft: 2,
    borderRadius: 15,
    justifyContent: 'center',
  },
  wheel: {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    width: 20,
    height: 20,
    backgroundColor: colors.white,
    borderRadius: 12.5,
    shadowOpacity: 0.2,
    shadowRadius: 2.5,
    elevation: 1.5,
  },
});
