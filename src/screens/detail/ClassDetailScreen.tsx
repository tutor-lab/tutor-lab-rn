import React, {useState, useEffect} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import {colors, width} from '../../constants';
import {
  Data,
  Detail,
  Tutor,
  Selection,
  Count,
  Sort,
  ReviewCard,
  TutorIntroduction,
} from '../../components/detail';
import {Line, Bottom} from '../../components/common';
import axios from 'axios';
import {LectureListType} from '../../types/data';

type Props = {navigation: any; route: {params: {itemId: number}}};

const ClassDetailScreen = ({navigation, route}: Props) => {
  const [selection, setSelection] = useState<{
    introduction: boolean;
    review: boolean;
  }>({introduction: true, review: false});

  //const [htmlContent,setHtmlContent] = useState("")
  const [content, setContent] = useState('');
  const [difficultyType, setDifficultyType] = useState('');
  const [introduce, setIntroduce] = useState('');
  const [lecturePrices, setLecturePrices] = useState({});
  const [lectureSubjects, setLectureSubjects] = useState([]);
  const [subTitle, setSubTitle] = useState('');
  const [systemTypes, setSystemTypes] = useState([]);
  const [thumbnail, setThumbnail] = useState('');
  const [title, setTitle] = useState('');
  const [lectureTutor, setLectureTutor] = useState([]);
  const [data, setData] = useState<LectureListType>();

  useEffect(() => {
    axios.get(`/lectures/${route.params.itemId}`).then(res => {
      setData(res.data);
      // console.log('RESDATA+============================', res.data);
      // setContent(res.data.content);
      // setDifficultyType(res.data.difficultyType);
      // setIntroduce(res.data.introduce);
      // setLecturePrices(res.data.lecturePrices);
      // setLectureSubjects(res.data.lectureSubjects);
      // setSubTitle(res.data.subTitle);
      // setSystemTypes(res.data.systemTypes);
      // setThumbnail(res.data.thumbnail);
      // setTitle(res.data.title);
      // setLectureTutor(res.data.lectureTutor);
    });
  }, [route.params.itemId]);

  return (
    <SafeAreaView style={styles.container}>
      {data && (
        <>
          <ScrollView contentContainerStyle={{flexGrow: 1}}>
            <Detail
              data={data}
              // title={title}
              // subTitle={subTitle}
              // lecturePrices={lecturePrices}
              // systemTypes={systemTypes}
              // thumbnail={thumbnail}
            />
            <Line />
            <Tutor
              navigation={navigation}
              data={Data.Detail}
              lectureTutor={data.lectureTutor}
              introduce={data.introduce}
            />
            <Line height={5} />
            <View style={styles.selection}>
              <Selection selection={selection} setSelection={setSelection} />
              {selection.review ? (
                // ??????
                <View style={{paddingTop: 32}}>
                  <Count />
                  <View style={{marginVertical: 25}}>
                    <Line />
                  </View>
                  <Sort />
                  {Data.Review.map(data => (
                    <View key={data.id}>
                      <ReviewCard data={data} />
                    </View>
                  ))}
                </View>
              ) : (
                // ?????? ??????
                <>
                  <TutorIntroduction content={data.content} />
                </>
              )}
            </View>
          </ScrollView>
          <Bottom.Detail
            heart={() => console.log('?????????')}
            btn={() =>
              navigation.navigate('Payment', {
                itemId: route.params.itemId,
                title: data.title,
                lecturePrices: data.lecturePrices,
                subject: data.lectureSubjects,
                thumbnail: data.thumbnail,
                lectureTutor: data.lectureTutor,
              })
            }
          />
        </>
      )}
    </SafeAreaView>
  );
};

export default ClassDetailScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  selection: {
    paddingTop: 28,
    paddingHorizontal: width * 20,
    paddingBottom: 9,
  },
  total: {
    height: 150,
    width: '100%',
    backgroundColor: colors.bg_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
