import { ADDTASK, ADDTODO } from '../actions/actionTypes';

export default function reducer(state = [], action) {
  const { type, payload } = action;

  switch (type) {
    case ADDTODO:
      return [...state, payload];
    case ADDTASK: {
      const newState = [...state];
      const todo = newState.find((todo) => todo.title === payload.title);
      todo.tasks.push(payload.task);
      return [...newState];
    }
    default:
      return state;
  }
}
