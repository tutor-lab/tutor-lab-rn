import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, Image} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {
  tag: string;
};

const ImageSection = ({tag}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.imageBox}>
        <Image
          source={require('../../../assets/images/card.png')}
          resizeMode="cover"
          style={styles.image}
        />
      </View>
      <View style={styles.tagBox}>
        <View style={styles.tag}>
          <Text style={[fonts[500], styles.tagText]}>{tag}</Text>
        </View>
      </View>
    </View>
  );
};
/*
 linear-gradient(180deg, rgba(101, 149, 244, 0.008) -14.72%, rgba(255, 255, 255, 0.4) 29.09%);
*/
export default ImageSection;

var styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 115,
    position: 'relative',
  },
  imageBox: {
    position: 'relative',
    zIndex: 1,
    height: 115,
  },
  image: {
    height: '100%',
    width: '100%',
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  tagBox: {
    width: '100%',
    paddingHorizontal: 8,
    position: 'relative',
    zIndex: 2,
    marginTop: -35,
    flexDirection: 'row',
  },
  tag: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white,
    height: 22,
    marginHorizontal: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 12,
    color: colors.white,
  },
});
