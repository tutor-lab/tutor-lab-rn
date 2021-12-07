import React, { useState } from 'react';
import {View, Modal, StyleSheet, Text, TouchableHighlight } from 'react-native';
import FilterDetail from "../../hometab/filter/FilterDetail";

interface Props {
    modalVisible: boolean;
    setModalVisible: any;
    body: any;
    titleIdx:number;
    touchFilterCategory:(idx: number) => void;
  }
const PlainModal = (props: Props) => {
    return (
        <Modal
        animationType={'slide'}
        transparent={true}
        visible={props.modalVisible}>
        <View style={styles.container}  onTouchEnd={() => props.setModalVisible(false)} >
        </View>
        <View style={styles.blankSpace}>
              <View style={{marginTop:30}}> 
                  {/* {props.body()}  */}
                  <FilterDetail titleIdx={props.titleIdx} touchFilterCategory={props.touchFilterCategory} />
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
  
   
  
