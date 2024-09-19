import { createSlice } from '@reduxjs/toolkit';

const todoSlice = createSlice({
  name: 'todos',
  initialState: [],
  reducers: {
    addTodo: (state, action) => {
      state.push({
        id: Date.now(),
        text: action.payload,
        isImportant: false,
        isEditing: false,
      });
    },
    deleteTodo: (state, action) => {
      return state.filter(todo => todo.id !== action.payload);
    },
    toggleImportant: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isImportant = !todo.isImportant;
      }
    },
    startEditing: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isEditing = true;
      }
    },
    saveEditing: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload.id);
      if (todo) {
        todo.text = action.payload.text;
        todo.isEditing = false;
      }
    },
    cancelEditing: (state, action) => {
      const todo = state.find(todo => todo.id === action.payload);
      if (todo) {
        todo.isEditing = false;
      }
    }
  },
});

export const { addTodo, deleteTodo, toggleImportant, startEditing, saveEditing, cancelEditing } = todoSlice.actions;
export default todoSlice.reducer;
