import React from 'react';
import {View, StyleSheet} from 'react-native';
import {width} from '../../../constants';
import {Container, Title} from './index';

type Props = {
  title: string;
};

const Main = ({title}: Props) => {
  return (
    <Container>
      <View style={styles.padding}>
        <Title title={title} fontSize={18} />
      </View>
    </Container>
  );
};

export default Main;

const styles = StyleSheet.create({
  padding: {paddingHorizontal: width * 20, flexDirection: 'row'},
  iconWrapper: {marginRight: 16},
});
