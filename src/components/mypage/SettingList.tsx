import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {SettingType} from '../../types/data';
import {Line, Switch} from '../common';
import {fonts, colors} from '../../constants';

type Props = {
  item: SettingType;
  setSetting: React.Dispatch<React.SetStateAction<SettingType | undefined>>;
};

const SettingList = ({item, setSetting}: Props) => {
  const handleToggle = () => {
    setSetting({...item, enabled: item.enabled});
  };

  return (
    <>
      <View style={styles.container}>
        <View style={{flex: 1}}>
          <Text style={[fonts[700], styles.title]}>{item.title}</Text>
          <Text style={[fonts[400], styles.description]}>{item.describe}</Text>
        </View>
        <View style={{alignItems: 'center'}}>
          <Switch enabled={item.enabled} onPress={() => handleToggle()} />
        </View>
      </View>
      <Line />
    </>
  );
};

export default SettingList;

const styles = StyleSheet.create({
  container: {paddingTop: 17, paddingBottom: 10, flexDirection: 'row'},
  title: {fontSize: 14, lineHeight: 16.71},
  description: {
    marginTop: 3,
    color: colors.light_gray,
    fontSize: 8,
    lineHeight: 9.55,
  },
});
