import React from 'react';
import 'react-native-gesture-handler';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {Selected, UnSelected} from '../common';

type Props = {
  selection: {
    introduction: boolean;
    review: boolean;
  };
  setSelection: React.Dispatch<
    React.SetStateAction<{
      introduction: boolean;
      review: boolean;
    }>
  >;
};

const Selection = ({selection, setSelection}: Props) => {
  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelection({introduction: true, review: false})}
        style={styles.touchable}>
        {selection.introduction ? (
          <Selected text={'강의 소개'} />
        ) : (
          <UnSelected text={'강의 소개'} />
        )}
      </TouchableOpacity>
      <View style={styles.divider} />
      <TouchableOpacity
        activeOpacity={1}
        onPress={() => setSelection({introduction: false, review: true})}
        style={styles.touchable}>
        {selection.review ? (
          <>
            <Selected text={'후기'} />
          </>
        ) : (
          <UnSelected text={'후기'} />
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
