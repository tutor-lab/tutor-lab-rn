import React, { useState } from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native';

interface Props {
    modalVisible: boolean;
    setModalVisible: any;
    body: any;
  }
const PlainModal = (props: Props) => {
    console.log(props)
    return (
        <Modal
        animationType={'slide'}
        transparent={true}
        visible={props.modalVisible}>
        <View style={styles.container} onTouchEnd={() => props.setModalVisible(false)} >
            <View
            style={styles.blankSpace}
              // 모달 빈 공간을 누르면 창 닫기 
            >
            <View style={{marginTop:50}}>
                {props.body()}
            </View>
            </View>
        </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center', 
      backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    blankSpace: {
      position: 'absolute',
      width: "100%",
      height: "50%",
      backgroundColor: '#fff',
      bottom:0,
      borderTopLeftRadius:20,
      borderTopRightRadius:20, 
      
    }, 
  });
  
   
  
  export default PlainModal;
  
   
  
