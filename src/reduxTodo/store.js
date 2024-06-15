import { configureStore } from '@reduxjs/toolkit';
import { todosReducer } from './slice';

export const store = configureStore({
  reducer: {
    todos: todosReducer,
  },
});
