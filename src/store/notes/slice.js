import { createSlice } from '@reduxjs/toolkit';

export const noteSlice = createSlice({
    name: "note",
    initialState: {
        list: [],
    },
    
    reducers: {

        addNote: (state, action) => { 
            state.list.unshift(action.payload);           
        },

        editNote: (state, action) => {
            const { index, title, description, date } = action.payload;
            const updatedList = state.list.map((note, i) => {
              if (i === index) {
                return {
                  ...note,
                  title, 
                  description,
                  date
                };
              }
              return note;
            });
            state.list = updatedList;
        },

        deleteNote: (state, action) => {
          const index = action.payload;
          const updatedList = state.list.filter((_, i) => i !== index);
          state.list = updatedList;
        },

    }
})
