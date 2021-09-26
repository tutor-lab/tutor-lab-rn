import React, {useState, useEffect} from 'react';
import 'react-native-gesture-handler';
import {View, StyleSheet, Text} from 'react-native';
import {colors, fonts} from '../../constants';
import {MessageList} from '../../types/data';

type Props = {
  list: MessageList;
};

const ChattingScreen = ({list}: Props) => {
  const [meridiem, setMeridiem] = useState<string>('');
  const [hour, setHour] = useState<string>('');
  const [minutes, setMinutes] = useState<string>('');
  const [message, setMessage] = useState<string>('');

  useEffect(() => {
    // utils.chkMeridiem(list.hour, setMeridiem);
    // utils.convertHours(list.hour, setHour);
    // setMinutes(list.minutes);
    setMessage(list.message);
  }, [list]);

  return (
    <View style={styles.container}>
      <View style={styles.chatBox}>
        <Text style={[fonts[400], styles.chatText]}>{list.message}</Text>
      </View>
      <View style={styles.timeBox}>
        <Text style={[fonts[400], styles.meridiemText]}>{meridiem}</Text>
        <View style={styles.divider} />
        <Text style={styles.timeText}>
          {hour}:{minutes}
        </Text>
      </View>
    </View>
  );
};

export default ChattingScreen;

const styles = StyleSheet.create({
  container: {marginVertical: 13.5 / 2, width: '100%', alignItems: 'flex-end'},
  chatBox: {
    backgroundColor: colors.main,
    paddingHorizontal: 16,
    paddingVertical: 10,
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
    borderTopLeftRadius: 16,
    maxWidth: '70%',
  },
  chatText: {color: colors.white, fontSize: 14, lineHeight: 20},
  timeBox: {
    marginTop: 5,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-end',
    marginRight: 15,
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
