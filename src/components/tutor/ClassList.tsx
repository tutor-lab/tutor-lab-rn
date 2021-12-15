import React, {useEffect, memo, useState} from 'react';
import {FlatList, View} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {Card, Commonstyles} from '../common';
import {getTutorLecturesRequest} from '../../redux/reducers/tutor';

type Props = {navigation: any; id: number};

const ClassList = ({navigation, id}: Props) => {
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

  const renderItem = (data: any) => (
    <View style={{paddingVertical: 9.5}}>
      <Card
        data={data}
        onPress={() =>
          navigation.navigate('Detail', {
            itemId: data.id,
          })
        }
      />
    </View>
  );

  return (
    tutorLectures.length !== 0 && (
      <View style={Commonstyles.padding}>
        <FlatList
          data={tutorLectures}
          renderItem={(data: any) => renderItem(data.item)}
          keyExtractor={item => item.id}
          onEndReached={onEndReached}
          onEndReachedThreshold={0.8}
        />
      </View>
    )
  );
};

export default memo(ClassList);
