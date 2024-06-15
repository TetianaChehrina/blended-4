import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: '',
  reducers: {
    textFilter: (state, action) => {
      return action.payload;
    },
  },
});

export const filtersReducer = filterSlice.reducer;
export const selectFilter = state => state.filter;
export const { textFilter } = filterSlice.actions;
