import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ScrollView,
  Keyboard,
  SafeAreaView,
  Text,
} from 'react-native';
import {colors, fonts, icons, width} from '../../constants';
import {WithLocalSvg} from 'react-native-svg/src';
import {SearchBar, ChatList} from '../../components/chat';

const ChatListScreen = () => {
  const [searchText, setSearchText] = useState('');
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <View style={styles.headerContainer}>
          <View style={{flex: 1}}>
            <Text style={[fonts[700], styles.headerText]}>채팅</Text>
          </View>
          <View style={styles.headerRight}>
            <TouchableOpacity activeOpacity={1} style={{}}>
              <WithLocalSvg asset={icons.alert_dot} />
            </TouchableOpacity>
            <View style={{marginLeft: 10}}>
              <TouchableOpacity activeOpacity={1} style={{marginLeft: 5}}>
                <WithLocalSvg asset={icons.more} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={styles.searchBar}>
            <SearchBar
              value={searchText}
              onChangeText={text => setSearchText(text)}
              placeholder={'강의명·언어·튜터를 검색하세요'}
              onSubmitEditing={() => Keyboard.dismiss()}
              blurOnSubmit={true}
            />
          </View>
          {/* 데이터 바인딩 필요 */}
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
          <ChatList />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
};

export default ChatListScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white, alignItems: 'center'},
  padding: {paddingHorizontal: width * 20},
  headerContainer: {
    paddingVertical: 17,
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  headerText: {color: colors.sub, fontSize: 18},
  headerRight: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    flex: 1,
  },
  searchBar: {paddingVertical: 16, width: '100%'},
});
