import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  ScrollView,
  Keyboard,
  SafeAreaView,
} from 'react-native';
import {colors, width} from '../../constants';
import {Header} from '../../components/common';
import {SearchBar, ChatList} from '../../components/chat';
import axios from 'axios';

const ChatListScreen = () => {
  const [searchText, setSearchText] = useState('');

  useEffect(() => {
    axios
      .get('/tutees/my-chatrooms')
      .then(function (response) {
        console.log(response);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.padding}>
        <Header.ChatList />
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
