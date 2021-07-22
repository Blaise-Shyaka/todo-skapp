import {
  ADD_TODO, ADD_TASK, UPDATE_TODOS, TOGGLE_LOGIN_STATUS, DELETETODO, DELETETASK,
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
      const currentState = { ...state };
      const { todos: updatedTodos } = currentState;
      const todo = updatedTodos.find((todo) => todo.title === payload.title);
      todo.tasks.push(payload.task);
      return { ...state, todos: [...updatedTodos] };
    }
    case UPDATE_TODOS:
      return { ...state, todos: payload };
    case TOGGLE_LOGIN_STATUS:
      return { ...state, userLoggedIn: payload };
    case DELETETODO: {
      const { todos } = state;
      todos.splice(payload, 1);
      return { ...state, todos: [...todos] };
    }
    case DELETETASK: {
      const { todoIndex, taskIndex } = payload;
      const { todos } = { ...state };
      const todo = todos[todoIndex];
      todo.tasks.splice(taskIndex, 1);
      return { ...state, todos: [...todos] };
    }
    default:
      return state;
  }
}
