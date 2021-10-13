import {StyleSheet} from 'react-native';

import {colors, width} from '../../constants';

const CommonStyles = StyleSheet.create({
  container: {flex: 1, backgroundColor: colors.white},
  padding: {width: '100%', paddingHorizontal: width * 20},
  textInputContainer: {paddingBottom: 13},
  textInputWrapper: {
    borderRadius: 10,
    backgroundColor: colors.bg_color,
    justifyContent: 'center',
    height: 50,
  },
});
export default CommonStyles;
