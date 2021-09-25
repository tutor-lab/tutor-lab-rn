import React, {useState, useEffect} from 'react';
import {View, StyleSheet} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {fonts, colors, width, height} from '../../constants';

type Item = {
    label: string,
    value: string,
};

type Props = {
    backgroundColor: string;
    selected: string;
    values: Item[];
    placeholder: string;
    onChangeValue: (value: string) => void;
};

const SelectInput = ({backgroundColor, selected, values, placeholder, onChangeValue}: Props) => {
    const [selectedValue, setSelectedValue] = useState('');

    useEffect(() => onSelectedValueChanged(),[selected]);

    const onValueSelected = (value: string) => {
        onChangeValue(value);
    };

    const onSelectedValueChanged = () => {
        const selectedItem = values.filter((e) => e['value'] === selected) as Item;
//         console.log(selectedItem);
//         console.log(typeof selectedItem);
//         console.log(selectedItem.length);
        if(selectedItem.length !== 0) {
            console.log(selectedItem[0]);
            const selectedObj = selectedItem[0] as Item;
            console.log(selectedObj['value']);
            setSelectedValue(selectedObj['value']);
        }
    }

    return (
        <View style={[styles.container, {backgroundColor: backgroundColor}]}>
            <RNPickerSelect
                textInputProps={{ underlineColorAndroid: 'transparent'}}
                placeholder={{
                  label: placeholder,
                  value: '',
                }}
                fixAndroidTouchableBug={true}
                value={selectedValue}
                onValueChange={ (e: string) => onValueSelected(e) }
                items={[...values]}
                style={styles.picker}
            />
        </View>
    );
};

export default SelectInput;

const styles = StyleSheet.create({
  container: {
    height: 52,
    borderRadius: 10,
    width: width * 140,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: "stretch",
    marginBottom: height * 10,
  },
  picker: {
    color: colors.black,
  }
});
