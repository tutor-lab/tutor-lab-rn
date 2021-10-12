import React from 'react';
import 'react-native-gesture-handler';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {colors, fonts} from '../../constants';

type Props = {
  chatLists: any;
  navigation: any;
};

const ChatList = ({chatLists, navigation}: Props) => {
  const goToChatRoom = () => {
    navigation.navigate('Chat', {
      params: {
        chatRoomId: chatLists.chatroomId,
      },
    });
  };

  return (
    <TouchableOpacity style={styles.container} onPress={goToChatRoom}>
      <View style={styles.leftSection}>
        <View style={styles.imageWrapper}>{/* 이미지 */}</View>
        <View style={styles.textSection}>
          <View style={styles.tutorContainer}>
            <View style={styles.tutorBox}>
              <Text style={[fonts[500], styles.tutorText01]}>튜터</Text>
            </View>
            <Text style={[fonts[500], styles.tutorText02]}>김하나</Text>
          </View>
          <Text
            numberOfLines={2}
            ellipsizeMode="tail"
            style={[fonts[400], styles.chatText]}>
            {chatLists.lectureTitle}
          </Text>
        </View>
      </View>
      <View style={styles.rightSection}>
        <View style={styles.meridiem}>
          <Text style={[fonts[400], styles.meridiemText]}>오후</Text>
          <View style={{width: 1}} />
          <Text style={styles.time}>08:36</Text>
        </View>
        <View style={styles.countContainer}>
          <View style={styles.count}>
            <Text style={styles.countText}>50</Text>
          </View>
        </View>
      </View>
    </TouchableOpacity>
  );
};
export default ChatList;

const styles = StyleSheet.create({
  container: {
    paddingVertical: 12,
    height: 80,
    flexDirection: 'row',
    width: '100%',
  },
  leftSection: {flex: 3, flexDirection: 'row'},
  imageWrapper: {
    height: 56,
    width: 56,
    borderRadius: 50,
    backgroundColor: 'rgba(101, 149, 244, 0.2)',
  },
  tutorContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tutorBox: {
    backgroundColor: 'rgba(238, 90, 90, 0.1)',
    borderRadius: 6,
    paddingVertical: 2,
    paddingHorizontal: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 7,
    height: 22,
  },
  textSection: {marginLeft: 12, flex: 1},
  tutorText01: {color: colors.red, fontSize: 12},
  tutorText02: {fontSize: 14, color: colors.sub},
  chatText: {fontSize: 12, color: colors.gray, lineHeight: 20},
  rightSection: {flex: 1, alignItems: 'flex-end'},
  meridiem: {flexDirection: 'row', height: '50%'},
  meridiemText: {color: colors.light_gray, fontSize: 10},
  time: {
    fontFamily: fonts.montserrat_400,
    color: colors.light_gray,
    fontSize: 11,
  },
  countContainer: {height: '50%', justifyContent: 'flex-end'},
  count: {
    paddingHorizontal: 8,
    paddingVertical: 3,
    backgroundColor: colors.main,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  countText: {
    fontSize: 12,
    color: colors.white,
    fontFamily: fonts.montserrat_500,
  },
});
