import React, {useState, useEffect, useRef, ElementType, memo} from 'react';
import 'react-native-gesture-handler';
import {
  View,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
} from 'react-native';
import axios from 'axios';
import {WithLocalSvg} from 'react-native-svg/src';

import {MessageList} from '../../types/data';
import {Header} from '../../components/common';
import {colors, fonts, icons, width} from '../../constants';
import {ChatMine, TextInput, ChatOther} from '../../components/chat';

type Props = {
  navigation: any;
  route: {params: {params: {chatRoomId: string; tutorId: string}}};
};

const ChatScreen = ({navigation, route}: Props) => {
  const scrollViewRef = useRef<ElementType>();
  const [input, setInput] = useState({text: '', height: 40});
  const [messageList, setMessageList] = useState<MessageList[]>([]);
  const [user, setUser] = useState<any>([]);
  const [sendMsgCnt, setSendMsgCnt] = useState(0);

  const ws = new WebSocket(
    `ws://3.35.255.192:9099/ws/chat/${route.params.params.chatRoomId}`,
  );

  useEffect(() => {
    // 에러 발생시
    ws.onerror = e => {
      console.log('e.message ===', e.message);
    };
    // 소켓 연결 해제
    ws.onclose = e => {
      console.log(`e.code ==== ${e.code}, e,reson ==== ${e.reason}`);
    };
  }, []);

  useEffect(() => {
    // 메세지 수신
    ws.onmessage = evt => {
      const data = JSON.parse(evt.data);
      setMessageList((prevItems: any) => [...prevItems, data]);
    };
  }, []);

  const sendMsgEnter = (value: string) => {
    const data = JSON.stringify({
      chatroomId: parseInt(route.params.params.chatRoomId),
      senderNickname: user.name,
      receiverId: route.params.params.tutorId,
      message: value,
    });

    try {
      ws.send(data);
    } catch (error) {}

    setInput({text: '', height: 40});
    setSendMsgCnt(sendMsgCnt + 1);
  };

  const getMy = async () => {
    try {
      await axios.get('/users/my-info').then((response: any) => {
        setUser(response.data);
        return response;
      });
    } catch (error) {
      return error;
    }
  };

  const getPrevChat = async () => {
    try {
      await axios
        .get(`/tutees/my-chatrooms/${route.params.params.chatRoomId}`)
        .then(response => {
          setMessageList(response.data);
          return response;
        });
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    getMy();
    getPrevChat();
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <Header.Chat navigation={navigation} title={'김하나'} />
      <ScrollView
        contentContainerStyle={styles.scroll}
        ref={scrollViewRef}
        onContentSizeChange={() => {
          scrollViewRef.current.scrollToEnd({animated: true});
        }}
        keyboardShouldPersistTaps={'always'}>
        <View style={styles.padding}>
          {messageList.length > 0 &&
            messageList.map(list =>
              user.name === list.senderNickname || user.name === list.sender ? (
                <View key={JSON.stringify(list.id)}>
                  <ChatMine list={list} />
                </View>
              ) : (
                <View key={JSON.stringify(list.id)}>
                  <ChatOther list={list} />
                </View>
              ),
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
                input.text.trim() !== '' && sendMsgEnter(input.text)
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

export default memo(ChatScreen);

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
