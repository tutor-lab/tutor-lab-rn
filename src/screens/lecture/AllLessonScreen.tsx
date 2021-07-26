import React from 'react';
import {View, StyleSheet, ScrollView} from 'react-native';

import {width, colors} from '../../constants';
import {Chip, ChipListData} from '../../components/lecture';
import {StackNavigationProp} from '@react-navigation/stack';

interface Props {
  navigation: StackNavigationProp<LoginStackParamList>;
}

const AllLessonScreen = ({}: Props) => {
  return (
    <View style={styles.container}>
      <View style={styles.chipContainer}>
        <ScrollView horizontal>
          {ChipListData.map(data => (
            <View key={data.id} style={styles.chips}>
              <Chip text={data.text} onPress={() => console.log('강의')} />
            </View>
          ))}
        </ScrollView>
      </View>
    </View>
  );
};

export default AllLessonScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
    paddingHorizontal: width * 19,
  },
  chipContainer: {height: 69},
  chips: {justifyContent: 'center', paddingRight: 10},

  category: {height: 88, flexDirection: 'row'},
  categoryLeft: {flex: 1, alignItems: 'flex-start'},
  categoryRight: {flex: 1, alignItems: 'flex-end'},
});
