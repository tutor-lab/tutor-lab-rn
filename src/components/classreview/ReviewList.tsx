import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserReviewRequest} from '../../redux/reducers/user';
import {Commonstyles} from '../../components/common';
import {ListCard} from '../classreview';

const ReviewList = ({navigation}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  const {userReviewList} = useSelector(state => state.user);

  useEffect(() => {
    dispatch(getUserReviewRequest(page));
  }, []);

  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState({
    title: '',
    describe: '',
  });

  return (
    <View style={Commonstyles.container}>
      <ListCard
        setIsModalVisible={setIsModalVisible}
        setModalText={setModalText}
      />
    </View>
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
