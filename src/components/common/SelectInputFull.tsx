import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {fonts, colors, width, height} from '../../constants';

type Item = {
  label: string;
  value: string;
};

type Props = {
  backgroundColor: string;
  values: Item[];
  placeholder: string;
  onChangeValue: (value: string) => void;
};

const SelectInputFull = ({
  backgroundColor,
  values,
  placeholder,
  onChangeValue,
}: Props) => {
  const [selectedValue, setSelectedValue] = useState('');

  useEffect(() => console.log(`useEffect: ${selectedValue}`), [selectedValue]);

  const onValueSelected = (value: string) => {
    setSelectedValue(value);
    onChangeValue(value);
  };

  return (
    <View style={[styles.container, {backgroundColor: backgroundColor}]}>
      <RNPickerSelect
        placeholder={{
          label: placeholder,
          value: '',
        }}
        useNativeAndroidPickerStyle={true}
        fixAndroidTouchableBug={true}
        value={selectedValue}
        onValueChange={(e: string) => onValueSelected(e)}
        items={[...values]}
        style={{inputAndroid: {color: 'black'}}}
      />
    </View>
  );
};

export default SelectInputFull;

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 10,
    width: width * 310,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'stretch',
    marginBottom: height * 10,
    paddingLeft: width * 10,
  },
});
