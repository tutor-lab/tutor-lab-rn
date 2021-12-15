import React, {useState, useEffect} from 'react';
import {useNavigation, useRoute} from '@react-navigation/native';
import {
  SafeAreaView,
  View,
  Text,
  Image,
  StyleSheet,
  useWindowDimensions,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import {getTutorInfoRequest} from '../../redux/reducers/tutor';
import {TabView, TabBar} from 'react-native-tab-view';
import {WithLocalSvg} from 'react-native-svg/src';
import ClassList from '../../components/tutor/ClassList';
import TutorInfo from '../../components/tutor/TutorInfo';
// import TutorReview from '../../components/tutor/TutorReview';

import {Commonstyles, TutorBox, Header, Line} from '../../components/common';
import {width, fonts, images, colors} from '../../constants';

const TutorScreen = () => {
  const route = useRoute();
  const id = route.params.id;
  const dispatch = useDispatch();
  const {tutorInfo} = useSelector(state => state.tutor);
  useEffect(() => {
    dispatch(getTutorInfoRequest(id));
  }, []);
  const navigation = useNavigation();
  const layout = useWindowDimensions();

  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: '튜터'},
    {key: 'second', title: '강의내역'},
    // {key: 'third', title: '튜터후기'},
  ]);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'first':
        return <TutorInfo tutorInfo={tutorInfo} />;
      case 'second':
        return <ClassList navigation={navigation} id={id} />;
      // case 'third':
      //   return <TutorReview navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={Commonstyles.container}>
      <Header.Basic title={''} navigation={navigation} />
      {tutorInfo && (
        <>
          <View style={styles.tutorWrapper}>
            <View style={styles.profileWrapper}>
              <View style={styles.imageWrapper}>
                {tutorInfo.user.image === null ||
                tutorInfo.user.image === '' ? (
                  <WithLocalSvg asset={images.tutor_profile} />
                ) : (
                  <Image
                    source={{
                      uri: `${tutorInfo.user.image}`,
                    }}
                    resizeMode="cover"
                    style={styles.image}
                  />
                )}
              </View>
              <View style={styles.profileTextWrapper}>
                <View style={styles.tutorNameWrapper}>
                  <TutorBox />
                  <Text style={[fonts[700], styles.tutorName]}>
                    {tutorInfo.user.nickname}
                  </Text>
                </View>
                <View style={styles.tuteeCountWrapper}>
                  <Text style={[fonts[400], styles.tuteeCount]}>
                    현재튜터 {'0'}명 / 누적튜터 {'0'}명
                  </Text>
                </View>
              </View>
            </View>
            <View style={styles.tutorExplanWrapper}>
              <Text style={[fonts[400], styles.tutorExplain]}>
                {tutorInfo.user.bio}
              </Text>
            </View>
          </View>
          <Line height={8} />
          <TabView
            renderTabBar={props => (
              <TabBar
                {...props}
                indicatorStyle={{backgroundColor: colors.main}}
                style={{backgroundColor: colors.white}}
                renderLabel={({route}) => (
                  <Text style={[fonts[500], styles.tabBar]}>{route.title}</Text>
                )}
              />
            )}
            navigationState={{index, routes}}
            renderScene={renderScene}
            onIndexChange={setIndex}
            initialLayout={{width: layout.width}}
          />
        </>
      )}
    </SafeAreaView>
  );
};
export default TutorScreen;

const styles = StyleSheet.create({
  profileWrapper: {flexDirection: 'row'},
  profileTextWrapper: {marginLeft: 19, justifyContent: 'space-evenly'},
  tutorWrapper: {paddingHorizontal: width * 31},
  tutorNameWrapper: {
    flexDirection: 'row',
  },
  imageWrapper: {
    height: 84,
    width: 84,
    borderRadius: (84 + 84) / 2,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  tutorName: {fontSize: 16, marginLeft: 9},
  tutorTitle: {},
  tuteeCountWrapper: {},
  tuteeCount: {color: colors.light_gray},
  tutorExplanWrapper: {marginVertical: 19},
  tutorExplain: {fontSize: 13, lineHeight: 19, textAlign: 'center'},
  tabBar: {fontSize: 16},
});
