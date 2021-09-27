import React, {useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import axios from 'axios';
import {Header} from '../../components/common';
import {colors, fonts, icons, width} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {navigation: any};

const TutorInfoScreen = ({navigation}: Props) => {
  return (
    <SafeAreaView style={styles.container}>
      <Header.TutorInfo navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.padding}>
          <Text>TutorInfoScreen</Text>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorInfoScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scroll: {flexGrow: 1},
  padding: {
    paddingHorizontal: width * 20,
    width: '100%',
    backgroundColor: colors.white,
  },
  left: {flexDirection: 'row', flex: 1},
  tutorBoxWrapper: {marginLeft: 18, marginRight: 8},
  right: {flexDirection: 'row', justifyContent: 'flex-end', flex: 1},
});
