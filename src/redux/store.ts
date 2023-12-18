import AsyncStorage from '@react-native-async-storage/async-storage';
import {configureStore} from '@reduxjs/toolkit';
import {persistReducer} from 'redux-persist';
import noteReducer from './slice/noteSlice';

const persistConfig = {
  version: 1,
  key: 'note',
  storage: AsyncStorage,
};

const persistedReducer = persistReducer(persistConfig, noteReducer);

export const store = configureStore({
  reducer: {
    notes: persistedReducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
