import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  SafeAreaView,
  StyleSheet,
  Text,
  Image,
  TouchableOpacity,
  ImageStore,
  Platform,
  TextInput,
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, height, width, icons, fonts} from '../constants';
import {Card, SearchBar} from '../components/home';
// import {TextInput} from '../components/common';

const Home = () => {
  const [search, setSearch] = useState('');

  const onChange = (text: string) => {
    setSearch(text);
  };

  return (
    // <View style={{height: '100%'}}>
    //   <LinearGradient
    //     colors={['#eff3fe', '#FFFFFF']}
    //     style={styles.linearGradient}></LinearGradient>
    // </View>
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <SearchBar value={search} onChangeText={(e: string) => onChange(e)} />
        <Card />
      </View>
    </SafeAreaView>
  );
};

export default Home;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  padding: {paddingHorizontal: width * 22, flex: 1, paddingTop: 20},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  box: {
    height: 52,
    borderRadius: 5,
    width: width * 290,
    justifyContent: 'center',
  },
  input: {
    color: colors.black,
    paddingLeft: 10,
    fontSize: 16,
    textAlignVertical: 'center',
    alignItems: 'center',
  },
});
