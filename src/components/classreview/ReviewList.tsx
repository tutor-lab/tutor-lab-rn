import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, ScrollView} from 'react-native';

import {Commonstyles} from '../../components/common';
import {ListCard} from '../classreview';

const ReviewList = () => {
  return (
    <ScrollView style={Commonstyles.container}>
      <ListCard />
    </ScrollView>
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
