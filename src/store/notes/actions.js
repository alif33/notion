import { noteSlice } from "./slice";
const { actions: slice } = noteSlice;

export const addNote = n => (dispatch) => {    
    dispatch(slice.addNote(n));
}

export const editNote = n => (dispatch) => {        
    dispatch(slice.editNote(n));
}

export const deleteNote = index => (dispatch) => {  
    dispatch(slice.deleteNote(index));
}


