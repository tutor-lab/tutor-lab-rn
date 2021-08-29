import React, {useState,useEffect} from 'react';
import {View, SafeAreaView, ScrollView, StyleSheet,useWindowDimensions,} from 'react-native';
import {colors, width} from '../../constants';
import {
  Data,
  Detail,
  Tutor,
  Selection,
  Count,
  Sort,
  ReviewCard,
} from '../../components/detail';
import {Line, Bottom} from '../../components/common';
import axios from 'axios';
import LectureIntro from './LectureIntro';

const MainScreen = () => {
  const [selection, setSelection] = useState<{
    introduction: boolean;
    review: boolean;
  }>({introduction: true, review: false});

  //const [htmlContent,setHtmlContent] = useState("")
  const [content,setContent] = useState("")
 

  useEffect(() => {

    axios.get("/lectures/30")
    .then((res)=>{
      console.log("res===",res.data)
      setContent(res.data.content)
    })
  },[])
  
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
            <>
               <LectureIntro content={content} />
            </>
          )}
        </View>
      </ScrollView>
      <Bottom.Detail
        heart={() => console.log('좋아요')}
        btn={() => console.log('강의 신청')}
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
