import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, SafeAreaView, ScrollView, StyleSheet} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {colors, width} from '../../constants';
import {
  Header,
  Lecture,
  Card,
  SearchBar,
  Filter,
  Count,
  Sort,
  Data,
} from '../../components/home';
import axios from 'axios';

type Props = {
  navigation: any;
};

const MainScreen = ({navigation}: Props) => {
  const [search, setSearch] = useState<string>('');
  const [alert, setAlert] = useState<boolean>(false);
  const [lecture, setLecture] = useState<{
    all: boolean;
    custom: boolean;
  }>({all: true, custom: false});
  const [lectureList, setLectureList] = useState<any[]>([]);
  const [lectureCount, setLectureCount] = useState<number>(0);

  const onChange = (text: string) => {
    setSearch(text);
  };
  useEffect(() => {
    axios
      .get('/lectures')
      .then(function (response) {
        setLectureList(response.data);
        setLectureCount(response.data.length);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    // <View style={{height: '100%'}}>
    //   <LinearGradient
    //     colors={['#eff3fe', '#FFFFFF']}
    //     style={styles.linearGradient}></LinearGradient>
    // </View>
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View style={styles.padding}>
          <View style={styles.header}>
            <Header alert={alert} />
          </View>
          <View style={styles.lecture}>
            <Lecture lecture={lecture} setLecture={setLecture} />
          </View>
          <View style={styles.searchBar}>
            <SearchBar
              value={search}
              onChangeText={(e: string) => onChange(e)}
            />
          </View>
          <View style={styles.filter}>
            <Filter data={Data.Filter} />
          </View>
          <View style={styles.middle}>
            <Count count={lectureCount} />
            <Sort />
          </View>
          <View style={styles.card}>
            {lectureList.map(data => (
              <View key={data.id}>
                <Card data={data} navigation={navigation} />
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default MainScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  padding: {paddingHorizontal: width * 22, flex: 1, paddingTop: 10},
  header: {},
  lecture: {marginTop: 30, zIndex: 3, position: 'relative'},
  searchBar: {marginTop: -50},
  filter: {marginTop: 22},
  middle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 40,
    height: 30,
  },
  card: {marginTop: 22.5},
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
});
