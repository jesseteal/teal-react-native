import * as U from './utils';
import * as H from './hooks';
import * as C from './Cache.js';

export const Utils = { ...U };
export const Hooks = { ...H };
export const Cache = { ...C };

const TealReactNative = {
  ...U,
  ...H
};
export default TealReactNative;
