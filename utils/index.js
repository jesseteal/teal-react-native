import { Platform, Dimensions, StatusBar } from 'react-native';

/*
const Component = Platform.select({
  ios: () => require('ComponentIOS'),
  android: () => require('ComponentAndroid')
})();

<Component />;
 */

const X_WIDTH = 375;
const X_HEIGHT = 812;
const XSMAX_WIDTH = 414;
const XSMAX_HEIGHT = 896;

export const isIOs = () => {
  return Platform.OS === 'ios';
}

export const isAndroid = () => {
  return Platform.OS === 'android';
}

export const getDimensions = () => {
  const width = Dimensions.get('window').width;
  const height = Dimensions.get('window').height;
  return { height, width };
}

//https://medium.com/codespace69/reactnative-ios-android-detect-screen-notch-status-bar-device-info-dc11b8c6a6a3
export const isIPhoneX = () => {
  const { width, height } = Dimensions.get('window');
  // console.log('width',width);
  if (Platform.OS === 'ios' && !Platform.isPad && !Platform.isTVOS){
    return (width === X_WIDTH && height === X_HEIGHT) ||
      (width === XSMAX_WIDTH && height === XSMAX_HEIGHT);
  }
  return false;
}

export const StatusBarHeight = Platform.select({
    ios: isIPhoneX() ? 44 : 20,
    android: StatusBar.currentHeight,
    default: 0
})
