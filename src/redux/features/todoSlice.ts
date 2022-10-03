import { createSlice } from "@reduxjs/toolkit";

export interface ITodoState {
  id: number | string;
  title: string;
  todo: string;
  time: string | number;
  status: string
}


export interface TodoState {
  todoList: ITodoState[],
  filterStatus: string
}

const getInitialTodo = () => {
  const localTodoList = window.localStorage.getItem('todoList');
  if(localTodoList){
    return JSON.parse(localTodoList) as ITodoState[]
  }
  return [];
}


const initialValue:TodoState = {
  filterStatus: 'all',
  todoList: getInitialTodo(),
};

export const todoSlice = createSlice({
  name: 'todo',
  initialState: initialValue,
  reducers: {
  addTodo: (state, action) => {
    state.todoList.push(action.payload);
    window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
  },
  deleteTodo: ( state, action ) => {
  state.todoList = [...state.todoList.filter(todo => todo.id !== action.payload)];
  window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    updateTodo: ( state, action ) => {
  const newTodos = state.todoList.filter(todo=> todo.id !== action.payload.id)
  state.todoList = [...newTodos, action.payload];
  window.localStorage.setItem('todoList', JSON.stringify(state.todoList));
    },
    updateFilterStatus: (state, action) => {
      state.filterStatus = action.payload
    }
  }
})

export const { addTodo, deleteTodo, updateTodo, updateFilterStatus  } = todoSlice.actions

export default todoSlice.reducer;


