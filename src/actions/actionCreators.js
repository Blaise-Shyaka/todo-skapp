import { ADDTASK, ADDTODO } from './actionTypes';

export function addToDo(payload) {
  return {
    type: ADDTODO,
    payload,
  };
}

export function addTask(payload) {
  return {
    type: ADDTASK,
    payload,
  };
}
