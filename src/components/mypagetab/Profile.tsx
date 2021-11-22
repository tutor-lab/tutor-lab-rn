import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, Image, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts, images, colors} from '../../constants';
import {TuteeBox} from '../common';
import {WithLocalSvg} from 'react-native-svg';

type Props = {
  userInfo: any;
  onPress: any;
};

const Profile = ({userInfo, onPress}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left01}>
        <View>
          <View style={styles.imageWrapper}>
            {userInfo.image ? (
              <Image
                source={{
                  uri: `${userInfo.image}`,
                }}
                resizeMode="cover"
                style={styles.image}
              />
            ) : (
              <View style={styles.nonImage}>
                <WithLocalSvg
                  asset={images.tutee_profile}
                  height={46}
                  width={46}
                />
              </View>
            )}
          </View>
        </View>
        <View style={styles.left02}>
          <TuteeBox />
          <Text style={[fonts[700], styles.profileName]}>
            {userInfo.nickname}
          </Text>
        </View>
      </View>
      <View style={styles.right}>
        <TouchableOpacity style={styles.fixBtn} onPress={onPress}>
          <Text style={[fonts[400], styles.fixProfile]}>프로필 수정</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 3,
    flexDirection: 'row',
  },
  left01: {flex: 1, flexDirection: 'row', alignItems: 'flex-start'},
  left02: {
    marginLeft: 15,
    alignItems: 'flex-start',
  },
  right: {flex: 1, alignItems: 'flex-end', justifyContent: 'center'},
  fixProfile: {color: colors.gray, fontSize: 12},
  imageWrapper: {
    height: 56,
    width: 56,
    borderRadius: 50,
    backgroundColor: colors.profile,
  },
  profileName: {fontSize: 16, lineHeight: 23.17},
  image: {height: '100%', width: '100%', borderRadius: 50},
  nonImage: {
    top: 7,
    left: 2,
    alignItems: 'center',
  },
  fixBtn: {
    borderRadius: 50,
    paddingHorizontal: 12,
    borderColor: colors.line,
    borderWidth: 1,
    paddingVertical: 8.5,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
