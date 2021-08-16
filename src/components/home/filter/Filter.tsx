import React from 'react';
import 'react-native-gesture-handler';
import {View, ScrollView, StyleSheet} from 'react-native';
import Chip from './Chip';

type Props = {
  data: {
    id: number;
    text: string;
    isSelected: boolean;
  }[];
};

const Filter = ({data}: Props) => {
  return (
    <ScrollView horizontal>
      {data.map(chip => (
        <View key={chip.id}>
          <Chip data={chip} />
        </View>
      ))}
    </ScrollView>
  );
};
export default Filter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
});
