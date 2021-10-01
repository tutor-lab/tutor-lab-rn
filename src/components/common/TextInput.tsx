import React from 'react';
import {TextInput} from 'react-native';
import {fonts, colors} from '../../constants';

type Props = React.ComponentProps<typeof TextInput> & {
  placeholderTextColor?: string;
  fontSize?: number;
  paddingHorizontal?: number;
  width?: string;
};

const Input = ({
  placeholderTextColor = colors.light_gray,
  fontSize = 14,
  paddingHorizontal = 18,
  width = '100%',
  ...props
}: Props) => {
  return (
    <TextInput
      placeholderTextColor={placeholderTextColor}
      style={[
        fonts[400],
        {
          fontSize: fontSize,
          paddingHorizontal: paddingHorizontal,
          width: width,
        },
      ]}
      {...props}
    />
  );
};

export default Input;
