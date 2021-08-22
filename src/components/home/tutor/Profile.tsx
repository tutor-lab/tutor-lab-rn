import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, TouchableOpacity} from 'react-native';

type Props = {};

const Profile = ({}: Props) => {
  return (
    <TouchableOpacity
      activeOpacity={1}
      onPress={() => console.log('go to profile')}
      style={styles.container}>
      <View style={styles.imageBox}></View>
    </TouchableOpacity>
  );
};
export default Profile;

const styles = StyleSheet.create({
  container: {
    width: 41,
    height: 41,
  },
  imageBox: {
    height: '100%',
    width: '100%',
    borderRadius: 50,
    backgroundColor: 'rgba(101, 149, 244, 0.2)',
  },
});
