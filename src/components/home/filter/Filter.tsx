import React from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet} from 'react-native';
import Chip from './Chip';
import {Data} from './Data';

type Props = {};

const Filter = ({}: Props) => {
  return (
    <View style={styles.container}>
      {Data.map(data => (
        <View key={data.id}>
          <Chip data={data} />
        </View>
      ))}
    </View>
  );
};
export default Filter;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
});
