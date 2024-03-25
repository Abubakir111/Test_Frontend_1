import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

export const fechTodos = createAsyncThunk('todos/fechTodos', async function () {
  const response = fetch('https://jsonplaceholder.typicode.com/todos?_limit=10');
  const data = (await response).json();
  return data;
});
const todoSlice = createSlice({
  name: 'todos',
  initialState: {
    status: null,
    error: null,
    todos: [],
    textVal: 'sds'
  },
  reducers: {
    addTodos(state) {
      state.todos.push({
        id: new Date().toISOString(),
        title: state.textVal,
        complited: false
      });
      state.textVal = '';
    },
    TextValue(state, action) {
      state.textVal = action.payload;
    },
    removeTodo(state, action) {
      console.log(action.payload);
      state.todos = state.todos.filter((el) => el.id !== action.payload);
    },
    toggleValue(state, action) {
      state.todos = state.todos.map((el) => {
        if (el.id !== action.payload) return el;
        else
          return {
            ...el,
            complited: !el.complited
          };
      });
    }
  },
  extraReducers: (build) => {
    build.addCase(fechTodos.fulfilled, (state, action) => {
      state.todos = action.payload;
    });
    build.addCase(fechTodos.pending, (state) => {
      state.status = 'загрузка..';
      state.error = null;
    });
    build.addCase(fechTodos.rejected, (state) => {
      state.error = 'error';
      state.status = 'resolved';
    });
  }
});

export const { addTodos, TextValue, removeTodo, toggleValue } = todoSlice.actions;
export default todoSlice.reducer;
