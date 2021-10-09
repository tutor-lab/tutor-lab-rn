import React, {useEffect} from 'react';
import {View, Animated, Modal, Platform, StyleSheet} from 'react-native';

import {width, colors} from '../../../constants';

type Props = {
  visible: boolean;
  setVisible: React.Dispatch<React.SetStateAction<boolean>>;
  children: any;
};

const Container = ({visible, setVisible, children}: Props) => {
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
            <View style={styles.card}>{children}</View>
          </Animated.View>
        </View>
      </View>
    </Modal>
  );
};

export default Container;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: width * 20,
    backgroundColor: 'rgba(0,0,0,0.2)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  modalView: {
    width: '100%',
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
    width: '100%',
    paddingVertical: 30,
    alignItems: 'center',
    transform: [{rotate: '0.04deg'}],
  },
});
