import { combineReducers } from '@reduxjs/toolkit';
import { noteSlice } from './notes/slice';

export const rootReducer = combineReducers({
    note: noteSlice.reducer
})