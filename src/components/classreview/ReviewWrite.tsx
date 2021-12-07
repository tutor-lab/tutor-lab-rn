import React, {useState, useEffect, memo} from 'react';
import 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import axios from 'axios';
import {Empty, WriteCard} from '../../components/classreview';

const ReviewWrite = ({navigation}) => {
  const [apiCount, setApiCount] = useState(1);
  const [reviewData, setReviewData] = useState(null);
  const [loading, setLoading] = useState(false);

  const getTakenClass = async () => {
    setLoading(true);
    try {
      await axios
        .get(`/tutees/my-lectures?page=${apiCount}`)
        .then((res: any) => {
          setReviewData(res.data.content);
          return res;
        });
      setLoading(false);
    } catch (err) {
      console.log('ERR!!!', err);
      return err;
    }
  };

  useEffect(() => {
    getTakenClass();
  }, []);

  const onEndReached = () => {
    setApiCount(apiCount + 1);
    if (loading) {
      return;
    } else {
      getTakenClass();
    }
  };

  const renderItem = (data: any) => (
    <WriteCard data={data} navigation={navigation} />
  );

  return reviewData ? (
    <FlatList
      data={reviewData}
      renderItem={(data: any) => renderItem(data)}
      keyExtractor={item => item.id}
      onEndReached={onEndReached}
      onEndReachedThreshold={0.8}
    />
  ) : (
    <Empty text={'수강된 강의가 없습니다.'} />
  );
};

export default memo(ReviewWrite);
