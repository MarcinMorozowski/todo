export const ADD_TODO = 'ADD_TODO';
export const REMOVE_TODO = 'REMOVE_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';

// action creators
export const addTodo = item => ({
  type: ADD_TODO,
  item
});

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id
});

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
});