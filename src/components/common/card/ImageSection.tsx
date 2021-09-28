import React, {useEffect, useState} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text, ImageBackground} from 'react-native';
import {colors, fonts} from '../../../constants';
import {DifficultyData, GroupData} from '../Data';

type Props = {
  thumbnail: string;
  difficultyType: string;
  isGroup: boolean;
};

const ImageSection = ({isGroup, difficultyType, thumbnail}: Props) => {
  const [difficulty, setDifficulty] = useState<string>('');
  const [group, setGroup] = useState<string>('');

  const chkDifficult = (text: string) => {
    const findIdx = DifficultyData.findIndex(curr => curr.title === text);
    const type = DifficultyData[findIdx].text;
    setDifficulty(type);
  };

  const chkGroup = (boolean: boolean) => {
    const findIdx = GroupData.findIndex(curr => curr.boolean === boolean);
    const type = GroupData[findIdx].text;
    setGroup(type);
  };

  useEffect(() => {
    chkDifficult(difficultyType);
    chkGroup(isGroup);
  }, [difficultyType, isGroup]);

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <View style={styles.header_box}>
          <ImageBackground
            source={{uri: thumbnail}}
            style={styles.image}
            resizeMode="cover"
            imageStyle={{opacity: 0.6}}
            borderTopLeftRadius={8}
            borderTopRightRadius={8}
          />
        </View>
        <View style={styles.tag_box}>
          <View style={styles.tag}>
            <Text style={[fonts[500], styles.tag_text]}>{difficulty}</Text>
          </View>
          <View style={styles.tag}>
            <Text style={[fonts[500], styles.tag_text]}>{group}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ImageSection;

var styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    position: 'relative',
    height: 115,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  header_box: {
    height: '100%',
    width: '100%',
    position: 'relative',
    zIndex: 0,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  image: {
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    backgroundColor: 'black',
  },
  tag_box: {
    width: '100%',
    height: 22,
    paddingHorizontal: 16,
    position: 'relative',
    zIndex: 3,
    marginTop: -35,
    flexDirection: 'row',
  },
  tag: {
    borderRadius: 8,
    borderWidth: 1,
    borderColor: colors.white,
    height: '100%',
    marginRight: 8,
    paddingHorizontal: 8,
    justifyContent: 'center',
  },
  tag_text: {
    fontSize: 12,
    color: colors.white,
  },
});
