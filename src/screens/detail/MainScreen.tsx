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

type Props = {navigation: any};

const MainScreen = ({navigation}: Props) => {
  const [selection, setSelection] = useState<{
    introduction: boolean;
    review: boolean;
  }>({introduction: true, review: false});

  //const [htmlContent,setHtmlContent] = useState("")
  const [content, setContent] = useState('');

  useEffect(() => {
    axios.get('/lectures/30').then(res => {
      setContent(res.data.content);
    });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Detail data={Data.Detail} />
        <View style={styles.line} />
        <Tutor data={Data.Detail} />
        <View style={[styles.line, {height: 5}]} />
        <View style={styles.selection_box}>
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
            <>{/* <TutorIntroduction content={content} /> */}</>
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
/*
  tag: ['무료', '그룹'],
  remote: ['ONLINE', 'OFFLINE'],
  title: '금융권 취업을 위한 데이터 분석 및 모델링 SQL, R, Python',
  explain: '기초부터 실무에서 사용하는 데이터 분석 기술 파헤치기',
  tutor: '김하나',
  hashtag: ['SQL', 'Python', 'SQLLite', 'S사 10년근무', 'SW개발및품질경력'],
  heart: 56,
  rating: 5,
  review: 28,
  discount: 20,
  price: '197,000',
  lecture_count: 4,
  review_count: 67,
  store_count: 122,
*/
export default MainScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  selection_box: {
    paddingTop: 28,
    paddingHorizontal: width * 20,
    paddingBottom: 9,
  },
  line: {
    height: 1,
    backgroundColor: colors.line,
    width: '100%',
  },
  total: {
    height: 150,
    width: '100%',
    backgroundColor: colors.bg_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
