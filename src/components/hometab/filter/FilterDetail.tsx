import React, { useState } from "react";
import { Text, StyleSheet,View,TouchableOpacity } from "react-native";
import {Data} from '../../../components/hometab';


interface Props{
  titleIdx:number
  touchFilterCategory:(idx: number) => void;
}
const FilterDetail = (props:Props) => {

  return (
    <View style={styles.filterList}>
        {Data.Filter.filter((item)=>item.text!="전체").map((item:any)=>(
            <TouchableOpacity onPress={()=>props.touchFilterCategory(item.id)}><Text style={[styles.filterText,item.id===props.titleIdx?styles.filterTextHover:styles.filterText]}>{item.text}</Text></TouchableOpacity>
        ))}
    </View> 
  )
}
const styles = StyleSheet.create({
  filterList: {
    flexDirection: 'row',
    alignItems:'center',
    marginLeft:10,
  },
  filterText:{
    fontFamily:"Noto Sans KR",
    color:"#949BAD",
    fontWeight:"700",
    fontSize:16,
    marginLeft:15,

  },
  filterTextHover:{
    fontFamily:"Noto Sans KR",
    color:"#2C343F",
    fontWeight:"700",
    fontSize:16,
    marginLeft:10,
    borderBottomWidth: 10,
    borderBottomColor: 'rgba(198,215,251,1)',
  }
 
});

export default React.memo(FilterDetail);