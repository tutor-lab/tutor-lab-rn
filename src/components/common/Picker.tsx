import React, {useEffect} from 'react';
import {
  View,
  Text,
  TouchableOpacity,
  Animated,
  Modal,
  Platform,
  StyleSheet,
  ScrollView,
} from 'react-native';
import {WithLocalSvg} from 'react-native-svg/src';
import {Zone} from '../../types/data';
import {width, icons, fonts, colors, height} from '../../constants';
import {Line} from '../../components/common';

type Props = {
  title: string;
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  items: Zone[] | undefined;
  setItem: React.Dispatch<React.SetStateAction<string>>;
};

const Picker = ({title, visible, setVisible, items, setItem}: Props) => {
  const scaleValue: Animated.Value = React.useRef(
    new Animated.Value(0),
  ).current;

  useEffect(() => {
    toggleModal();
  }, [visible]);

  const toggleModal = () => {
    if (visible) {
      setVisible(true);
      Animated.spring(scaleValue, {
        toValue: 1,
        duration: 200,
        useNativeDriver: true,
      }).start();
    } else {
      setTimeout(() => setVisible(false), 200);
      Animated.timing(scaleValue, {
        toValue: 0,
        duration: 200,
        useNativeDriver: true,
      }).start();
    }
  };
  return (
    <Modal transparent visible={visible}>
      <View style={styles.container}>
        <View style={styles.modalView}>
          <Animated.View
            style={[
              styles.animation,
              {transform: [{scale: scaleValue}]},
              {
                ...Platform.select({
                  ios: {
                    shadowColor: 'rgba(136, 136, 136, 0.22)',
                    shadowOffset: {width: 8, height: 8},
                    shadowOpacity: 0.3,
                    shadowRadius: 5,
                  },
                  android: {elevation: 5},
                }),
              },
            ]}>
            <View style={styles.card}>
              <View style={styles.row}>
                <View style={styles.rowWidth} />
                <View style={styles.titleWrapper}>
                  <Text style={[fonts[500], styles.title]}>{title}</Text>
                </View>
                <View style={styles.rowWidth}>
                  <TouchableOpacity
                    activeOpacity={1}
                    onPress={() => setVisible(false)}>
                    <WithLocalSvg asset={icons.close} />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.lineWrapper}>
                <Line />
              </View>
              <View style={styles.scroll}>
                <ScrollView>
                  {items &&
                    items.map(item => (
                      <TouchableOpacity
                        key={item.value}
                        activeOpacity={1}
                        onPress={() => {
                          setItem(item.value);
                          setVisible(false);
                        }}
                        style={styles.itemWrapper}>
                        <Text style={[fonts[500], styles.item]}>
                          {item.value}
                        </Text>
                      </TouchableOpacity>
                    ))}
                </ScrollView>
              </View>
            </View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

export default Picker;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'flex-end',
  },
  modalView: {
    borderRadius: 3,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5,
    elevation: 5,
    overflow: 'hidden',
  },
  animation: {
    width: '100%',
    backgroundColor: colors.white,
  },
  card: {
    height: height * 400,
    width: '100%',
    paddingTop: 30,
    alignItems: 'center',
    paddingHorizontal: width * 35,
    transform: [{rotate: '0.04deg'}],
  },
  row: {flexDirection: 'row'},
  titleWrapper: {flex: 1, alignItems: 'center'},
  title: {fontSize: 15},
  rowWidth: {width: 24},
  lineWrapper: {marginVertical: 13, width: '100%'},
  itemWrapper: {
    marginVertical: 10,
    width: '100%',
  },
  item: {fontSize: 16},
  scroll: {flex: 1, width: '100%'},
});
