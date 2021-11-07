import React from 'react';
import 'react-native-gesture-handler';
import {ScrollView} from 'react-native';
import {Commonstyles} from '../../components/common';

import {Empty, WriteCard} from '../../components/classreview';

const ReviewWrite = ({navigation}) => {
  return (
    <ScrollView style={Commonstyles.container}>
      <WriteCard navigation={navigation} />
    </ScrollView>
  );
};

export default ReviewWrite;
