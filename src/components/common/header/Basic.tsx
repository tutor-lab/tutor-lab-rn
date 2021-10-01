import React from 'react';
import {View, TouchableOpacity, StyleSheet} from 'react-native';
import {width, icons} from '../../../constants';
import {Container, Title} from './index';
import {WithLocalSvg} from 'react-native-svg/src';

type Props = {
  title: string;
  navigation: any;
  fontSize?: number;
};

const Basic = ({title, navigation, fontSize = 16}: Props) => {
  return (
    <Container>
      <View style={styles.padding}>
        <TouchableOpacity
          style={styles.iconWrapper}
          activeOpacity={1}
          onPress={() => navigation.goBack()}>
          <WithLocalSvg asset={icons.back_arrow} />
        </TouchableOpacity>
        <Title title={title} fontSize={fontSize} />
      </View>
    </Container>
  );
};

export default Basic;

const styles = StyleSheet.create({
  padding: {
    paddingHorizontal: width * 20,
    flexDirection: 'row',
    alignItems: 'center',
  },
  iconWrapper: {marginRight: 16},
});
