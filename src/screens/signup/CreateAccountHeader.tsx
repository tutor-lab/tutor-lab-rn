import React, { useState } from 'react';
import { StepComponentProps } from "react-step-builder";
import 'react-native-gesture-handler';
import { View, SafeAreaView, ScrollView, StyleSheet, TouchableOpacity, Text, Dimensions } from 'react-native';
import { height, width, colors, icons, fonts } from '../../constants';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { Modal, TextInput, Button } from '../../components/common';
import { StackNavigationProp } from '@react-navigation/stack';
import { WithLocalSvg } from 'react-native-svg/src';

const CreateAccountHeader = (props : StepComponentProps) => {
    return (
        <View style={styles.appbar}>
            <View style={styles.padding}>
                <View style={styles.icon_button}>
                    <TouchableOpacity
                        activeOpacity={1}
                        onPress={() => !props.isFirst ? props.prev() : console.log('로그인 화면으로 돌아감.. 어떻게?')}
                        style={styles.icon}>
                        <WithLocalSvg asset={icons.back} />
                    </TouchableOpacity>
                </View>
                <View style={styles.header}>
                    <Text style={[fonts[500], styles.title]}>`${props.current}`</Text>
                </View>
            </View>
        </View>
    );
}

export default CreateAccountHeader;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexGrow: 1,
    backgroundColor: colors.bg_color,
  },
  appbar: {
    position: 'absolute',
    left: 0,
    right: 0,
    height: height * 60,
    backgroundColor: colors.bg_color,
    width: '100%',
  },
  header: {
    flexGrow: 0,
    flexShrink: 0,
    flexBasis: 400,
    alignItems: "center",
    justifyContent: "center",
  },
  padding: {
    flex: 1,
    paddingHorizontal: width * 10,
    flexDirection: "row",
    alignContent: "space-between",
  },
  icon_button: {
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    justifyContent: "center",
  },
  icon: { alignItems: 'center', width: width * 24 },
  title: { fontSize: height * 16.5, color: colors.sub, textAlignVertical: "center" },
});