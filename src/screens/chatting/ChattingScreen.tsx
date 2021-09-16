import React, {useState} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import {colors, fonts, icons, width, utils} from '../../constants';

import {ChatMine, TextInput} from '../../components/chatting';
import {WithLocalSvg} from 'react-native-svg/src';
import {MessageList} from '../../types/data';

// textinput line 최대 몇 줄? 나중에 채팅 올때 알람 어떻게? 읽었는지 안읽었는지 표시?
// 스크롤 수정 필요

const ChattingScreen = () => {
  const [input, setInput] = useState({text: '', height: 40});
  const [messageList, setMessageList] = useState<MessageList[]>([]);

  const sendMessage = (msg: string) => {
    const today = new Date();

    const message = {
      id: messageList.length,
      message: msg,
      date: `${today.getFullYear()}-${utils.parseToday(
        today.getMonth() + 1,
      )}-${utils.parseToday(today.getDate())}`,
      hour: `${utils.parseToday(today.getHours())}`,
      minutes: `${utils.parseToday(today.getMinutes())}`,
      // 그외.. 유저토큰? 아이디?
    };
    setInput({text: '', height: 0});
    setMessageList([...messageList, message]);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.scroll}>
        <View style={styles.padding}>
          {messageList.length !== 0 ? (
            <>
              {messageList.map(list => (
                <View key={list.id}>
                  <ChatMine list={list} />
                </View>
              ))}
            </>
          ) : (
            <></>
          )}
        </View>
      </ScrollView>
      <View style={styles.bottomContainer}>
        <View style={styles.plusBox}>
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => console.log('')}
            style={[styles.plusIcon, {height: input.height}]}>
            <WithLocalSvg asset={icons.plus} />
          </TouchableOpacity>
          <View style={styles.inputBox}>
            <TextInput
              onContentSizeChange={event => {
                setInput({
                  ...input,
                  height: event.nativeEvent.contentSize.height,
                });
              }}
              value={input.text}
              onChangeText={t => {
                setInput({...input, text: t});
              }}
              style={[
                fonts[400],
                styles.textInput,
                {height: Math.max(35, input.height)},
              ]}
              multiline={true}
              placeholder={'메세지를 입력하세요'}
            />
            <TouchableOpacity
              activeOpacity={1}
              onPress={() =>
                input.text.trim() !== '' ? sendMessage(input.text) : ''
              }
              style={[styles.sendIcon, {height: input.height}]}>
              <WithLocalSvg asset={icons.search_main} />
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.bg_color},
  padding: {paddingHorizontal: width * 20},
  scroll: {flexGrow: 1, justifyContent: 'flex-end'},
  textInput: {
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  bottomContainer: {
    paddingHorizontal: width * 20,
    paddingVertical: 20,
    backgroundColor: colors.white,
    flexDirection: 'row',
  },
  plusBox: {
    width: '100%',
    alignItems: 'center',
    flexDirection: 'row',
  },
  inputBox: {
    paddingHorizontal: 16,
    borderColor: colors.line,
    borderRadius: 8,
    width: '100%',
    borderWidth: 1,
    alignItems: 'center',
    flexDirection: 'row',
    flex: 1,
  },
  plusIcon: {
    justifyContent: 'center',
    width: 38,
  },
  sendIcon: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 44,
  },
});
