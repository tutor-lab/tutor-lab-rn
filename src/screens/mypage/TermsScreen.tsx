import React from 'react';
import 'react-native-gesture-handler';
import {StyleSheet} from 'react-native';
import WebView from 'react-native-webview';

const TermsScreen = () => {
  return (
    <WebView
      source={{
        uri: 'https://github.com/tutor-lab/tutor-lab-front/wiki/%ED%8A%9C%ED%84%B0%EB%9E%A9-%EA%B0%9C%EC%9D%B8%EC%A0%95%EB%B3%B4',
      }}
      style={styles.container}
    />
  );
};

export default TermsScreen;

const styles = StyleSheet.create({container: {flex: 1}});
