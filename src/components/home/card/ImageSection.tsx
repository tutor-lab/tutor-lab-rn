import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, Image} from 'react-native';

import {colors, fonts} from '../../../constants';

type Props = {
  tag: string[];
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
        {tag.map(text => (
          <View key={text} style={styles.tag}>
            <Text style={[fonts[500], styles.tagText]}>{text}</Text>
          </View>
        ))}
      </View>
    </View>
  );
};

export default ImageSection;

var styles = StyleSheet.create({
  container: {
    flex: 1,
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
    paddingHorizontal: 16,
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
    marginRight: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  tagText: {
    fontSize: 12,
    color: colors.white,
  },
});
