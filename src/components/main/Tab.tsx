import React, {useEffect, useState} from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {colors, fonts} from '../../constants';
interface ITab {
  isFocused: boolean;
  label:
    | string
    | ((props: {focused: boolean; color: string}) => React.ReactNode)
    | undefined;
  onPress: () => void;
  setToValue: (params: number) => void;
  setWidth: (params: number) => void;
}

export default function Tab({
  isFocused,
  label,
  onPress,
  setToValue,
  setWidth,
}: ITab) {
  const [layout, setLayout] = useState<any>(null);
  useEffect(() => {
    if (isFocused && layout) {
      setToValue(layout.x);
      setWidth(layout.width);
    }
  }, [isFocused, layout, setToValue, setWidth]);

  const onLayout = (e: any) => {
    const {x, width} = e.nativeEvent.layout;
    setLayout({x, width});
  };

  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={onPress}
      style={styles.container}>
      <View style={styles.tab}>
        <Text
          style={[
            styles.tabText,
            isFocused ? {color: colors.main1} : {color: '#949BAD'},
          ]}
          onLayout={onLayout}>
          {label}
        </Text>
      </View>
      <View style={styles.bottom}>
        {isFocused ? <View style={styles.bottomLine} /> : <></>}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {flex: 1},
  tab: {height: 46, alignItems: 'center', justifyContent: 'center'},
  tabText: {fontFamily: fonts.medium, fontSize: 16},
  bottom: {alignItems: 'flex-end'},
  bottomLine: {backgroundColor: colors.main1, height: 2, width: '100%'},
});
