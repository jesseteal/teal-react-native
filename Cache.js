// import React from 'react';
import AsyncStorage from '@react-native-community/async-storage';

/*
Usage:

import Cache from 'app/src/utils/teal-rn/Cache';

Cache.get(key).then(value => {})
Cache.set(key,value)
*/


const Cache = {
  set: async (key, value) => {
    try {
      return await AsyncStorage.setItem(key, JSON.stringify(value))
    } catch (e) {
      console.log('Cache Error',e);
    }
  },

  get: async key => {
    try {
      const value = await AsyncStorage.getItem(key)
      if(value !== null){
        return JSON.parse(value);
      }
      return value;
    } catch(e) {
      console.log('Cache Error',e);
    }
  }
};

export default Cache;
