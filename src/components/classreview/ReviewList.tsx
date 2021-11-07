import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, ScrollView} from 'react-native';

import {Commonstyles} from '../../components/common';
import {ListCard} from '../classreview';
import {Modals} from '../../components/editprofile';

const ReviewList = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState({
    title: '',
    describe: '',
  });

  return (
    <ScrollView style={Commonstyles.container}>
      <ListCard
        setIsModalVisible={setIsModalVisible}
        setModalText={setModalText}
      />
      {isModalVisible && (
        <Modals.Container
          visible={isModalVisible}
          setVisible={setIsModalVisible}>
          <Modals.Title text={modalText.title} />
          <Modals.Description text={modalText.describe} />
          <Modals.TwoBtn
            textCancel={'아니요'}
            textOk={'예'}
            onPressCancel={() => setIsModalVisible(false)}
            onPressOk={() => {
              setIsModalVisible(false);
              navigation.navigate('ReviewWrite');
            }}
          />
        </Modals.Container>
      )}
    </ScrollView>
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
