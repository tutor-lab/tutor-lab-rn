import React from 'react';
import 'react-native-gesture-handler';
import {
  SafeAreaView,
  StyleSheet,
  useWindowDimensions,
  Text,
} from 'react-native';
import {TabView, TabBar} from 'react-native-tab-view';

import {Commonstyles, Header} from '../../components/common';
import {colors, fonts} from '../../constants';
import {ReviewList, ReviewWrite} from '../../components/classreview';

const ReviewListScreen = ({navigation}) => {
  const layout = useWindowDimensions();
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    {key: 'first', title: '후기작성'},
    {key: 'second', title: '후기내역'},
  ]);

  const renderScene = ({route}: any) => {
    switch (route.key) {
      case 'first':
        return <ReviewWrite navigation={navigation} />;
      case 'second':
        return <ReviewList navigation={navigation} />;
      default:
        return null;
    }
  };

  return (
    <SafeAreaView style={Commonstyles.container}>
      <Header.Basic navigation={navigation} title={'강의 후기'} />
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
    </SafeAreaView>
  );
};

export default ReviewListScreen;

const styles = StyleSheet.create({
  tabBar: {fontSize: 16},
});
