import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts} from '../../constants';
import {Line} from '../common';

type Props = {
  list: {id: number; title: string; navigation: string; lastIdx: boolean};
  onPress: any;
};

const List = ({list, onPress}: Props) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={onPress}>
        <Text style={[fonts[400], styles.text]}>{list.title}</Text>
      </TouchableOpacity>
      {!list.lastIdx && <Line />}
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {paddingVertical: 10, width: '100%'},
  text: {fontSize: 14, textAlignVertical: 'center'},
});
