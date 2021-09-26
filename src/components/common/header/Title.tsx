import React from 'react';
import 'react-native-gesture-handler';
import {View, Text} from 'react-native';
import {colors, fonts} from '../../../constants';

type Props = {title: string; fontSize: number};

const Title = ({title, fontSize}: Props) => {
  return (
    <View>
      <Text style={[fonts[700], {fontSize: fontSize, color: colors.sub}]}>
        {title}
      </Text>
    </View>
  );
};

export default Title;
