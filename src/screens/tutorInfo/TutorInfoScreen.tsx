import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  TouchableOpacity,
  View,
  ScrollView,
  StyleSheet,
  Text,
} from 'react-native';
import axios from 'axios';
import {Header, Line, TutorBox, Card, Data} from '../../components/common';
import {TutorInfo} from '../../types/data';

import {Selection} from '../../components/tutorInfo';
import {colors, fonts, icons, width} from '../../constants';

type Props = {navigation: any};

const TutorInfoScreen = ({navigation}: Props) => {
  const [profile, setProfile] = useState<TutorInfo>();
  const [selection, setSelection] = useState<{
    class: boolean;
    review: boolean;
  }>({class: true, review: false});
  const [count, setCount] = useState<{
    class: number;
    review: number;
  }>({class: 0, review: 0});
  console.log(profile);
  const tutorId: number = 3; // params로 넘기기

  useEffect(() => {
    axios
      .get(`/tutors/${tutorId}`)
      .then(function (response) {
        setProfile(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header.TutorInfo navigation={navigation} />
      <ScrollView contentContainerStyle={styles.scroll}>
        {profile && (
          <>
            <View style={styles.padding}>
              <View style={styles.profileContainer}>
                <View style={styles.row}>
                  <View style={styles.profileLeft}>
                    <TutorBox />
                    <Text style={[fonts[700], styles.name]}>
                      {profile.user.nickname}
                    </Text>
                    <Text style={[fonts[400], styles.bio]}>
                      {profile.user.bio}
                    </Text>
                  </View>
                  <View style={styles.profileRight}>
                    <View style={styles.imgWrapper}>{/* 프로필 이미지 */}</View>
                  </View>
                </View>
                <View style={styles.explainWrapper}>{/*  */}</View>
              </View>
            </View>
            <Line height={8} />
            <View style={[styles.padding, {paddingVertical: 27}]}>
              <Selection
                selection={selection}
                setSelection={setSelection}
                count={count}
              />
              <View style={{marginVertical: 9}}>
                {selection.class ? (
                  Data.Card.map(data => (
                    <View key={data.id}>
                      <Card
                        data={data}
                        onPress={() =>
                          navigation.navigate('Detail', {
                            itemId: data.id,
                          })
                        }
                      />
                    </View>
                  ))
                ) : (
                  <>{/* 후기 */}</>
                )}
              </View>
            </View>
          </>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default TutorInfoScreen;

var styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.white,
  },
  row: {width: '100%', flexDirection: 'row'},
  scroll: {flexGrow: 1},
  padding: {
    paddingHorizontal: width * 20,
    width: '100%',
    backgroundColor: colors.white,
  },
  profileContainer: {paddingVertical: 3},
  profileLeft: {flex: 1, alignItems: 'flex-start'},
  profileRight: {flex: 1, alignItems: 'flex-end'},
  name: {fontSize: 22, lineHeight: 31.88, marginVertical: 3},
  bio: {fontSize: 13, lineHeight: 19, color: colors.light_gray},
  imgWrapper: {
    height: 88,
    width: 88,
    borderRadius: 50,
    backgroundColor: colors.profile,
    alignItems: 'center',
    justifyContent: 'center',
  },
  explainWrapper: {
    marginVertical: 29,
    height: 72,
    backgroundColor: colors.bg_color,
    borderRadius: 8,
  },
});
