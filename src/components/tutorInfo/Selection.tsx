import React from 'react';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Selected, UnSelected} from '../common';

type Props = {
  selection: {
    class: boolean;
    review: boolean;
  };
  setSelection: React.Dispatch<
    React.SetStateAction<{
      class: boolean;
      review: boolean;
    }>
  >;
  count: {class: number; review: number};
};

const Selection = ({selection, setSelection, count}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelection({class: true, review: false})}
        style={styles.touchable}>
        {selection.class ? (
          <Selected text={`강의내역 ${count.class}`} />
        ) : (
          <UnSelected text={`강의내역 ${count.class}`} />
        )}
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelection({class: false, review: true})}
        style={styles.touchable}>
        {selection.review ? (
          <>
            <Selected text={`후기 ${count.review}`} />
          </>
        ) : (
          <UnSelected text={`후기 ${count.review}`} />
        )}
      </TouchableOpacity>
    </View>
  );
};
export default Selection;

const styles = StyleSheet.create({
  container: {flexDirection: 'row'},
  touchable: {height: 50},
  divider: {width: 22},
});
