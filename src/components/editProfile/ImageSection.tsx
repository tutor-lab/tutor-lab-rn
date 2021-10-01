import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import {colors, width, images, icons} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {};

const ImageSection = ({}: Props) => {
  return (
    <View style={styles.padding}>
      <View style={styles.imageBox}>
        <View style={styles.imageWrapper}>
          <WithLocalSvg asset={images.tutee_profile} />
        </View>
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
});
