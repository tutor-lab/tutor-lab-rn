/* eslint-disable no-shadow */
import React from 'react';
import 'react-native-gesture-handler';
import axios from 'axios';
import {useDispatch} from 'react-redux';
import {launchImageLibrary} from 'react-native-image-picker';
import {WithLocalSvg} from 'react-native-svg';

import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, width, icons, images} from '../../constants';
import {getUserInfoRequest} from '../../redux/reducers/user';

type Props = {
  profileImage: null | string;
};

const ImageSection = ({profileImage}: Props) => {
  const dispatch = useDispatch();
  const addImage = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      if (!res.didCancel && res.assets !== undefined) {
        const fd = new FormData();
        fd.append('file', {
          name: res.assets[0].fileName,
          uri: res.assets[0].uri,
          type: res.assets[0].type,
        });
        axios
          .post('/uploads/images', fd)
          .then(res => {
            axios
              .put('/users/my-info/image', {image: res.data.url})
              .then(() => dispatch(getUserInfoRequest()))
              .catch(err => {
                console.log(err.message);
              });
          })
          .catch(err => {
            console.log(err.message);
          });
      }
    });
  };

  return (
    <View style={styles.padding}>
      <View style={styles.imageBox}>
        <TouchableOpacity
          style={styles.imageWrapper}
          activeOpacity={1}
          onPress={() => addImage()}>
          {profileImage ? (
            <Image
              source={{
                uri: `${profileImage}`,
              }}
              resizeMode="cover"
              style={styles.image}
            />
          ) : (
            <View style={styles.nonImage}>
              <WithLocalSvg
                asset={images.tutee_profile}
                height={79}
                width={79}
              />
            </View>
          )}
        </TouchableOpacity>
        <View style={styles.editProfile}>
          <WithLocalSvg asset={icons.edit_profile} />
        </View>
      </View>
    </View>
  );
};

export default ImageSection;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 20, alignItems: 'center'},
  imageBox: {paddingVertical: 59, position: 'relative'},
  image: {height: '100%', width: '100%', borderRadius: 50},
  imageWrapper: {
    height: 100,
    width: 100,
    borderRadius: 50,
    backgroundColor: colors.profile,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
    zIndex: 0,
  },
  editProfile: {
    zIndex: 1,
    alignItems: 'flex-end',
    position: 'relative',
    justifyContent: 'flex-start',
    bottom: 30,
  },
  listWrapper: {width: '100%', paddingVertical: 9},
  nonImage: {left: 4},
});
