import AsyncStorage from '@react-native-async-storage/async-storage';
import {INotes} from '../types';

const dataOperation = {
  save: async (key: string, value: INotes) => {
    try {
      await AsyncStorage.setItem(key, JSON.stringify(value));
    } catch (error) {
      console.log(error);
    }
  },
  delete: async (key: string) => {
    try {
      await AsyncStorage.removeItem(key);
    } catch (error) {
      console.log(error);
    }
  },
  get: async (key: string) => {
    try {
      const value = await AsyncStorage.getItem(key);
      if (value) {
        return JSON.parse(value);
      } else {
        return null;
      }
    } catch (error) {
      console.log(error);
    }
  },
  getAllKeys: async () => {
    try {
      let keys = await AsyncStorage.getAllKeys();
      return keys;
    } catch (error) {
      console.log(error);
    }
  },
  getAllItems: async (keys: string[]) => {
    try {
      let items = await AsyncStorage.multiGet(keys);
      return items;
    } catch (error) {
      console.log(error);
    }
  },
};

export default dataOperation;
