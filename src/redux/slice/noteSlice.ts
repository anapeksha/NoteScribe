import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import type {INotes} from '../../types';
import type {RootState} from '../store';

interface IState {
  value: Array<INotes>;
}

const initialState: IState = {
  value: [],
};

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    saveNote: (state, action: PayloadAction<INotes>) => {
      state.value.push(action.payload);
    },
    deleteNote: (state, action: PayloadAction<INotes>) => {
      state.value = state.value.filter(
        element => element.id !== action.payload.id,
      );
    },
  },
});

export const {saveNote, deleteNote} = noteSlice.actions;
export const selectNotes = (state: RootState) => state.notes.value;
export default noteSlice.reducer;
