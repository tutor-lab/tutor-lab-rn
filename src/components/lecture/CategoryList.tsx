import React from 'react';
import {View, StyleSheet} from 'react-native';
import {CategoryDetail} from '../lecture';

type Props = {
  data: {
    id: number;
    explain: string;
    text: string;
  }[];
};

const CategoryList = ({data}: Props) => {
  return (
    <View style={styles.category}>
      <View style={styles.categoryLeft}>
        <CategoryDetail
          explain={data[0].explain}
          text={data[0].text}
          onPress={() => console.log('개발')}
        />
      </View>
      <View style={styles.categoryRight}>
        <CategoryDetail
          explain={data[1].explain}
          text={data[1].text}
          onPress={() => console.log('개발')}
        />
      </View>
    </View>
  );
};

export default CategoryList;

const styles = StyleSheet.create({
  category: {height: 88, flexDirection: 'row'},
  categoryLeft: {flex: 1, alignItems: 'flex-start'},
  categoryRight: {flex: 1, alignItems: 'flex-end'},
});
