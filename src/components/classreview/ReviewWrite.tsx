import React, {useState, useEffect, memo} from 'react';
import 'react-native-gesture-handler';
import {FlatList} from 'react-native';
import axios from 'axios';
import {Empty, WriteCard} from '../../components/classreview';
import {LectureList} from '../../types/data';
/*
{"content": [{"content": "<p>본문</p>", "difficultyType": "BEGINNER", "id": 23, "introduce": "소개", "lecturePrices": [Array], "lectureSubjects": [Array], "lectureTutor": [Object], "reviewCount": null, "scoreAverage": 0, "subTitle": "소제목", "systemTypes": [Array], "thumbnail": "https://tutorlab.s3.ap-northeast-2.amazonaws.com/2bb34d85-dfa5-4b0e-bc1d-094537af475c", "title": "C/C++강의"}, {"content": "<p>ㅎㅎㅎ</p>", "difficultyType": "BASIC", "id": 24, "introduce": "반갑습니다", "lecturePrices": [Array], "lectureSubjects": [Array], "lectureTutor": [Object], "reviewCount": null, "scoreAverage": 0, "subTitle": "토익", "systemTypes": [Array], "thumbnail": "https://tutorlab.s3.ap-northeast-2.amazonaws.com/user/73dd30e4-6f9a-4364-90ca-875bd66e32cb", "title": "[💣오늘의 특가] 220문장으로 토익부터 회화까지! 비즈니스 영어 완성"}], "empty": false, "first": true, "last": true, "number": 0, "numberOfElements": 2, "pageable": {"offset": 0, "pageNumber": 0, "pageSize": 10, "paged": true, "sort": {"empty": false, "sorted": true, "unsorted": false}, "unpaged": false}, "size": 10, "sort": {"empty": false, "sorted": true, "unsorted": false}, "totalElements": 2, "totalPages": 1}
*/
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

  const renderItem = (data: LectureList) => (
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
