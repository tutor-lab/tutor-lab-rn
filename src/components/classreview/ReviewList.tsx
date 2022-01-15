import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {StyleSheet, View, FlatList} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {getUserReviewRequest} from '../../redux/reducers/user';
import {Commonstyles} from '../../components/common';
import {ListCard} from '../classreview';
import {Empty} from '../../components/classreview';

const ReviewList = ({navigation}) => {
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);
  const {userReviewList} = useSelector(state => state.user);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [modalText, setModalText] = useState({
    title: '',
    describe: '',
  });

  useEffect(() => {
    dispatch(getUserReviewRequest(page));
  }, []);

  const onEndReached = () => {
    setPage(page + 1);
    dispatch(getUserReviewRequest(page));
  };

  const renderItem = (data: any) => (
    <ListCard
      data={data}
      navigation={navigation}
      setIsModalVisible={setIsModalVisible}
      setModalText={setModalText}
    />
  );

  return (
    <View style={Commonstyles.container}>
      {userReviewList.length === 0 ? (
        <Empty text={'후기내역이 없습니다.'} />
      ) : (
        <FlatList
          data={userReviewList}
          renderItem={(data: any) => renderItem(data)}
          keyExtractor={item => item.key}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
        />
      )}
    </View>
  );
};

export default ReviewList;

const styles = StyleSheet.create({});
