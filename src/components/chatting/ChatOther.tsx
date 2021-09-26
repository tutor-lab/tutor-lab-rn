import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../constants';
import {MessageList} from '../../types/data';

type Props = {list: MessageList};

const ChatOther = ({list}: Props) => {
  const [meridiem, setMeridiem] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [message, setMessage] = useState<string>('');
  const [userName, setUserName] = useState<string>('');

  useEffect(() => {
    setUserName(list.username);
    setMessage(list.message);
  }, [list]);

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.imageBox}>
          <View style={styles.imageWrapper}>{/* 이미지 */}</View>
        </View>
      </View>
      <View style={{}}>
        <View style={{marginBottom: 6}}>
          <Text
            ellipsizeMode="tail"
            numberOfLines={1}
            style={[fonts[500], styles.tutorText]}>
            {userName}
          </Text>
        </View>
        <View style={styles.chatBox}>
          <Text style={[fonts[400], styles.chatText]}>{message}</Text>
        </View>
        <View style={styles.timeBox}>
          <Text style={[fonts[400], styles.meridiemText]}>{meridiem}</Text>
          <View style={styles.divider} />
          <Text style={styles.timeText}>
            {hour}:{minutes}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ChatOther;

const styles = StyleSheet.create({
  container: {
    marginVertical: 13.5 / 2,
    width: '70%',
    alignItems: 'flex-start',
    flexDirection: 'row',
  },
  imageBox: {marginRight: 12},
  imageWrapper: {
    height: 44,
    width: 44,
    backgroundColor: 'rgba(101, 149, 244, 0.2)',
    borderRadius: 50,
  },
  chatBox: {
    backgroundColor: colors.white,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopRightRadius: 16,
  },
  tutorText: {fontSize: 12, color: colors.sub},
  chatText: {color: colors.sub, fontSize: 14, lineHeight: 20},
  timeBox: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    marginLeft: 15,
  },
  divider: {width: 1},
  meridiemText: {fontSize: 10, color: colors.gray},
  timeText: {
    fontFamily: fonts.montserrat_400,
    fontSize: 11,
    lineHeight: 13.41,
    color: colors.gray,
  },
});
