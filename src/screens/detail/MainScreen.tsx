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

type Props = {navigation: any; route: any};

const MainScreen = ({navigation, route}: any) => {
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

  useEffect(() => {
    axios.get(`/lectures/${route.params.itemId}`).then(res => {
      console.log('res', res);
      setContent(res.data.content);
      setDifficultyType(res.data.difficultyType);
      setIntroduce(res.data.introduce);
      setLecturePrices(res.data.lecturePrices[0]);
      setLectureSubjects(res.data.lectureSubjects);
      setSubTitle(res.data.subTitle);
      setSystemTypes(res.data.systemTypes[0]);
      setThumbnail(res.data.thumbnail);
      setTitle(res.data.title);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Detail
          data={Data.Detail}
          title={title}
          subTitle={subTitle}
          lecturePrices={lecturePrices}
        />
        <Line />
        <Tutor data={Data.Detail} />
        <Line height={5} />
        <View style={styles.selection}>
          <Selection selection={selection} setSelection={setSelection} />
          {selection.review ? (
            // 후기
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
            // 강의 소개
            <>
              <TutorIntroduction content={content} />
            </>
          )}
        </View>
      </ScrollView>
      <Bottom.Detail
        heart={() => console.log('좋아요')}
        btn={() =>
          navigation.navigate('Payment', {
            title: Data.Detail.title,
            subject: Data.Detail.lectureSubjects,
            tutor: Data.Detail.tutor,
          })
        }
      />
    </SafeAreaView>
  );
};

export default MainScreen;

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
