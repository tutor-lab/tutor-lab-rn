import {Dimensions} from 'react-native';

export const basicDimensions = {
  height: 812,
  width: 375,
};

export const height: number = (
  Dimensions.get('screen').height *
  (1 / basicDimensions.height)
).toFixed(2);

export const width: number = (
  Dimensions.get('screen').width *
  (1 / basicDimensions.width)
).toFixed(2);
