import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
  },
  reducers: {
    addTodos: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTodos: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
  },
});
export const todosReducer = todosSlice.reducer;
export const { addTodos, deleteTodos } = todosSlice.actions;
export const selectToDos = state => state.todos.items;
