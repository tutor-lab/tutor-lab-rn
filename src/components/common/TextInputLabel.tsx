import React from 'react';
import {Text, StyleSheet} from 'react-native';
import {fonts, colors} from '../../constants';

type Props = {
  title: string;
  color?: string;
  fontSize?: number;
};

const TextInputLabel = ({title, color = colors.main, fontSize = 14}: Props) => {
  return (
    <Text
      style={[
        fonts[400],
        styles.textLabel,
        {color: color, fontSize: fontSize},
      ]}>
      {title}
    </Text>
  );
};

export default TextInputLabel;

const styles = StyleSheet.create({
  textLabel: {paddingLeft: 18},
});
