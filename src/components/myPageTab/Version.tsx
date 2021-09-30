import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';

type Props = {
  title: string;
  version: string;
};

const Version = ({title, version}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.left}>
        <Text style={[fonts[400], styles.text]}>{title}</Text>
      </View>
      <View style={styles.right}>
        <Text style={[fonts[400], styles.text, {color: colors.main}]}>
          ver{' '}
        </Text>
        <Text
          style={[
            styles.text,
            {fontFamily: fonts.montserrat_500, color: colors.main},
          ]}>
          {version}
        </Text>
      </View>
    </View>
  );
};

export default Version;

const styles = StyleSheet.create({
  container: {paddingVertical: 10, width: '100%', flexDirection: 'row'},
  text: {fontSize: 14, textAlignVertical: 'center'},
  left: {flex: 1, justifyContent: 'flex-start'},
  right: {flex: 1, justifyContent: 'flex-end', flexDirection: 'row'},
});
