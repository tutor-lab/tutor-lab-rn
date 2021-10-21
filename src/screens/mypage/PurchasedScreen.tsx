import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  Button,
  TouchableOpacity,
} from 'react-native';
import {SearchBarNoLogo} from '../../components/hometab';
import {Header, Line} from '../../components/common';
import {colors, fonts} from '../../constants';
import axios from 'axios';
import {width, height} from '../../constants';

type Props = {navigation: any};
const PurchasedScreen = ({navigation}: Props) => {
  const [search, setSearch] = useState<string>('');
  const [myLectures, setMyLectures] = useState<any>([]);
  const onChange = (text: string) => {
    setSearch(text);
  };
  const getMyLecutres = () => {
    axios
      .get('/tutees/my-lectures')
      .then(res => {
        console.log('res=', res);
        setMyLectures(res.data.content);
      })
      .catch(err => {
        console.log(err);
      });
  };

  useEffect(() => {
    getMyLecutres();
  }, []);

  return (
    <View style={styles.container}>
      <Header.Basic title={'구매한 강의'} navigation={navigation} />
      <View style={styles.searchBar}>
        <SearchBarNoLogo
          value={search}
          onChangeText={(e: string) => onChange(e)}
        />
      </View>
      <View>
        <View style={styles.LectrueKind}>
          <Text style={styles.h2}>전체 강의</Text>
        </View>
      </View>
      <Line height={14} />
      <ScrollView style={styles.itemcontainer}>
        {myLectures.map((item: any) => (
          <View
            style={{
              height: height * 200,
              width: width * 200,
              flexDirection: 'row',
            }}>
            <Image
              style={styles.image}
              resizeMode="contain"
              source={{
                uri: item.thumbnail === undefined ? '' : item.thumbnail,
              }}
            />
            <View style={{marginTop: 50}}>
              <Text>{item.title}</Text>
              <Text>{item.lectureTutor + '김하나'}</Text>
              <Text>
                {item.lecturePrices[0].totalCost}
                {'/ 1개월 기준'}
              </Text>
            </View>
            <View
              style={{
                marginTop: 140,
                width: 100,
                flexDirection: 'row',
                alignItems: 'flex-start',
              }}>
              {/* <Button
                onPress={() => {}}
                title="후기작성"
                color="#841584"
                accessibilityLabel="후기 작성"
              /> */}
              <TouchableOpacity>
                <View
                  style={{
                    width: width * 250,
                    height: height * 50,
                    right: width * 250,
                    backgroundColor: '#F3F5F8',
                    borderRadius: 10,
                    flex: 1,
                    flexDirection: 'row',
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <Text>후기 작성</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </ScrollView>
    </View>
  );
};
var styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
  },
  itemcontainer: {
    backgroundColor: colors.white,
    height: height * 480,
  },
  searchBar: {
    marginTop: 50,
    textAlign: 'center',
    width: '80%',
    marginLeft: 40,
  },
  LectrueKind: {
    marginTop: 40,
    marginLeft: 30,
  },
  h2: {
    fontWeight: 'bold',
    fontSize: 15,
    bottom: 20,
  },
  image: {width: '100%', height: '80%', borderRadius: 10},
});
export default PurchasedScreen;
