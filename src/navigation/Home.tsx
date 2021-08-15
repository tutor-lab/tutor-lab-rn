import React, {useState, useEffect} from 'react';
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
import {Header, Select, Card, SearchBar, Filter} from '../components/home';

const Home = () => {
  const [search, setSearch] = useState<string>('');
  const [alert, setAlert] = useState<boolean>(false);
  const [lecture, setLecture] = useState<{
    all: boolean;
    custom: boolean;
  }>({all: true, custom: false});

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
        <Header alert={alert} />
        <Select lecture={lecture} setLecture={setLecture} />
        <SearchBar value={search} onChangeText={(e: string) => onChange(e)} />
        <Filter />
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
  padding: {paddingHorizontal: width * 22, flex: 1, paddingTop: 10},

  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
