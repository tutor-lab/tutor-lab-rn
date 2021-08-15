import React from 'react';
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
} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {WithLocalSvg} from 'react-native-svg/src';

import {colors, height, width, icons, fonts} from '../constants';
import {Card} from '../components/home';

const Home = () => {
  return (
    // <View style={{height: '100%'}}>
    //   <LinearGradient
    //     colors={['#eff3fe', '#FFFFFF']}
    //     style={styles.linearGradient}></LinearGradient>
    // </View>
    <SafeAreaView style={styles.container}>
      <View style={{paddingHorizontal: width * 20, flex: 1, paddingTop: 20}}>
        <Card />
      </View>
    </SafeAreaView>
  );
};
/*
 linear-gradient(180deg, rgba(101, 149, 244, 0.008) -14.72%, rgba(255, 255, 255, 0.4) 29.09%);
*/
export default Home;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
