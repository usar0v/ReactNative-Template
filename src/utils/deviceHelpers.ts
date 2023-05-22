import {Dimensions, Platform} from 'react-native';
import {
  getBottomSpace,
  getStatusBarHeight,
  isIphoneX,
} from 'react-native-iphone-x-helper';

export const bottomSpace = getBottomSpace();

export const deviceWidth = Dimensions.get('window').width;

export const deviceHeight = Dimensions.get('window').height;

export const deviceSize = {
  width: deviceWidth,
  height: deviceHeight,
};

export const deviceRatio = deviceHeight / deviceWidth;

export const isTablet = deviceRatio < 1.5;

export const isAndroid = Platform.OS === 'android';

export const statusBarHeight =
  Platform.OS === 'android' ? 0 : getStatusBarHeight() + (isIphoneX() ? 8 : 0);
