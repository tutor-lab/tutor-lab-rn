import React from 'react';
import 'react-native-gesture-handler';
import {View, Image, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, width, icons, images} from '../../constants';
import {launchImageLibrary} from 'react-native-image-picker';
import {WithLocalSvg} from 'react-native-svg';

type Props = {image: null | string};

const ImageSection = ({image}: Props) => {
  const addImage = () => {
    launchImageLibrary({mediaType: 'photo'}, res => {
      // console.log(res);
      // axios로 보낸다!
    });
  };

  return (
    <View style={styles.padding}>
      <View style={styles.imageBox}>
        <TouchableOpacity
          style={styles.imageWrapper}
          activeOpacity={1}
          onPress={() => addImage()}>
          {image ? (
            <Image
              source={{
                uri: `${image}`,
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
