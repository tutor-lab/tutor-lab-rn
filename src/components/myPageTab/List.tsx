import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {fonts} from '../../constants';
import {Line} from '../common';

type Props = {
  title: String;
  onPress: any;
};

const List = ({title, onPress}: Props) => {
  return (
    <View>
      <TouchableOpacity
        activeOpacity={1}
        style={styles.container}
        onPress={onPress}>
        <Text style={[fonts[400], styles.text]}>{title}</Text>
      </TouchableOpacity>
      <Line />
    </View>
  );
};

export default List;

const styles = StyleSheet.create({
  container: {paddingVertical: 10, width: '100%'},
  text: {fontSize: 14, textAlignVertical: 'center'},
});
