import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
  name: 'todos',
  initialState: {
    items: [],
    currentTodo: null,
  },
  reducers: {
    addTodos: (state, action) => {
      state.items.push(action.payload);
    },

    deleteTodos: (state, action) => {
      state.items = state.items.filter(item => item.id !== action.payload);
    },
    addCurrentTodo: (state, action) => {
      state.currentTodo = action.payload;
    },
    changeTodos: (state, action) => {
      state.items = state.items.map(item => {
        return item.id === state.currentTodo.id
          ? { ...item, text: action.payload }
          : item;
      });
      state.currentTodo = null;
    },
  },
});
export const todosReducer = todosSlice.reducer;
export const { addTodos, deleteTodos, addCurrentTodo, changeTodos } =
  todosSlice.actions;
export const selectToDos = state => state.todos.items;
export const selectCurrentTodo = state => state.todos.currentTodo;
