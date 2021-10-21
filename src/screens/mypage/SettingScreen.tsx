import React, {useState, useEffect, memo} from 'react';
import 'react-native-gesture-handler';
import {SafeAreaView, View} from 'react-native';
import axios from 'axios';

import {Commonstyles, Header, Data} from '../../components/common';
import {SettingType} from '../../types/data';
import {ListTitle} from '../../components/mypagetab';
import {SettingList} from '../../components/mypage';

const SettingScreen = ({navigation}) => {
  const [settingData, setSettingData] = useState<SettingType[]>(Data.Setting); // api 받을 state
  const [setting, setSetting] = useState<SettingType>();

  useEffect(() => {
    if (setting !== undefined) {
      const handleToggle = (value: number) => {
        const find = settingData.map((curr: SettingType) => ({
          ...curr,
          enabled: curr.id === value ? !curr.enabled : curr.enabled,
        }));
        setSettingData(find);
      };
      handleToggle(setting.id);
      // // api 만들어지면 보내기
      // axios
      //   .put('/setting', settingData)
      //   .then(res => {})
      //   .catch(err => {});
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setting]);

  return (
    <SafeAreaView style={Commonstyles.container}>
      <Header.Basic title={'설정'} navigation={navigation} />
      <View style={Commonstyles.padding}>
        <ListTitle title={'푸시 알림'} />
        {settingData.map(item => (
          <SettingList key={item.id} item={item} setSetting={setSetting} />
        ))}
      </View>
    </SafeAreaView>
  );
};

export default memo(SettingScreen);
