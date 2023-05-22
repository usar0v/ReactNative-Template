import {StyleSheet} from 'react-native';
import {colors} from 'src/utils/theme/colors';

export const textStyles = StyleSheet.create({
  small: {
    fontSize: 12,
    color: colors.text,
  },
  smallBold: {
    fontSize: 12,
    color: colors.text,
    fontWeight: 'bold',
  },
  normal: {
    fontSize: 14,
    color: colors.text,
  },
  normalBold: {
    fontSize: 14,
    color: colors.text,
    fontWeight: 'bold',
  },
  large: {
    fontSize: 18,
    color: colors.text,
  },
  largeBold: {
    fontSize: 18,
    color: colors.text,
    fontWeight: 'bold',
  },
});
