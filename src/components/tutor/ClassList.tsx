import React, {useEffect, memo, useState} from 'react';
import {FlatList} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getTutorLecturesRequest} from '../../redux/reducers/tutor';

type Props = {navigation: any; id: number};

const ClassList = ({navigation, id}) => {
  const {tutorLectures, tutorLecturesLodaing} = useSelector(
    state => state.tutor,
  );
  const dispatch = useDispatch();
  const [page, setPage] = useState(1);

  useEffect(() => {
    dispatch(getTutorLecturesRequest(id, page));
  }, []);

  const onEndReached = () => {
    setPage(page + 1);
    if (tutorLecturesLodaing) {
      return;
    } else {
      dispatch(getTutorLecturesRequest(17, page));
    }
  };

  const renderItem = (data: any) => console.log(data);
  // <WriteCard data={data} navigation={navigation} />

  return (
    tutorLectures.length !== 0 && (
      <FlatList
        data={tutorLectures}
        renderItem={(data: any) => renderItem(data.item)}
        keyExtractor={item => item.id}
        onEndReached={onEndReached}
        onEndReachedThreshold={0.8}
      />
    )
  );
};

export default memo(ClassList);
