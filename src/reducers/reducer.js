import {
  ADD_TODO, ADD_TASK, UPDATE_TODOS, TOGGLE_LOGIN_STATUS,
} from '../actions/actionTypes';

const defaultState = {
  userLoggedIn: false,
  todos: [],
};

export default function reducer(state = defaultState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TODO:
      return { ...state, todos: [...payload] };
    case ADD_TASK: {
      const newState = { ...state };
      const todo = newState.todos.find((todo) => todo.title === payload.title);
      todo.tasks.push(payload.task);
      return { ...newState };
    }
    case UPDATE_TODOS:
      return { ...state, todos: payload };
    case TOGGLE_LOGIN_STATUS:
      return { ...state, userLoggedIn: payload };
    default:
      return state;
  }
}
