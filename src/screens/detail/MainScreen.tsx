import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Image,
  Text,
  TouchableOpacity,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg';

import {colors, width, icons, fonts} from '../../constants';
import {
  Data,
  Detail,
  Tutor,
  Selection,
  Count,
  Sort,
  ReviewCard,
} from '../../components/detail';
import {Line} from '../../components/common';

const MainScreen = () => {
  const [selection, setSelection] = useState<{
    introduction: boolean;
    review: boolean;
  }>({introduction: true, review: false});

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <Detail data={Data.Detail} />
        <View style={styles.line} />
        <Tutor data={Data.Detail} />
        <View style={[styles.line, {height: 5}]} />
        <View
          style={{
            paddingTop: 28,
            paddingHorizontal: width * 20,
            paddingBottom: 9,
          }}>
          <Selection selection={selection} setSelection={setSelection} />
          {selection.review ? (
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
            <></>
          )}
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
  line: {
    height: 1,
    backgroundColor: colors.line,
    width: '100%',
  },
  text: {
    fontFamily: fonts.montserrat_500,
    fontSize: 13,
    color: colors.light_gray,
  },
  total: {
    height: 150,
    width: '100%',
    backgroundColor: colors.bg_color,
    alignItems: 'center',
    justifyContent: 'center',
  },
  totalCount: {
    fontFamily: fonts.montserrat_700,
    fontSize: 40,
    color: colors.main,
  },
  count: {
    fontFamily: fonts.montserrat_500,
    fontSize: 13,
    color: colors.light_gray,
  },
});
