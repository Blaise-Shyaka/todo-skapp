import { SkynetClient } from 'skynet-js';
import {
  ADD_TASK, ADD_TODO, DELETETODO, TOGGLE_LOGIN_STATUS, UPDATE_TODOS,
} from './actionTypes';

const portal = window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;
export const client = new SkynetClient(portal);
const domain = 'localhost';
const todosFilePath = `${domain}/tda.json`;

export function addToDo(payload) {
  return {
    type: ADD_TODO,
    payload,
  };
}

export function addTask(payload) {
  return {
    type: ADD_TASK,
    payload,
  };
}

export function updateTodos(payload) {
  return {
    type: UPDATE_TODOS,
    payload,
  };
}

export function deleteTodo(payload) {
  return {
    type: DELETETODO,
    payload,
  };
}

export function toggleLoginStatus(payload) {
  return {
    type: TOGGLE_LOGIN_STATUS,
    payload,
  };
}

export function postTodo(todo) {
  return async (dispatch) => {
    try {
      const mySky = await client.loadMySky();
      const { data: existingTodos } = await mySky.getJSON(todosFilePath);

      if (existingTodos) {
        const updatedTodos = [...existingTodos, todo];
        const { data } = await mySky.setJSON(todosFilePath, updatedTodos);
        dispatch(addToDo(data));
        return;
      }

      const { data } = await mySky.setJSON(todosFilePath, [todo]);

      dispatch(addToDo(data));
    } catch (e) {
      console.log(e);
    }
  };
}

export function postTask(task) {
  return async (dispatch) => {
    const { title, task: newTask } = task;
    try {
      const mySky = await client.loadMySky();
      const { data } = await mySky.getJSON(todosFilePath);
      const todo = data.find((todo) => todo.title === title);
      todo.tasks.push(newTask);
      dispatch(addTask(task));
      await mySky.setJSON(todosFilePath, data);
    } catch (e) {
      console.log(e);
    }
  };
}

export function fetchTodos() {
  return async (dispatch) => {
    try {
      const mySky = await client.loadMySky();
      const { data } = await mySky.getJSON(todosFilePath);

      dispatch(updateTodos(data || []));
    } catch (e) {
      console.log(e);
    }
  };
}

export function removeTodo(index) {
  return async (dispatch) => {
    try {
      const mySky = await client.loadMySky();
      const { data } = await mySky.getJSON(todosFilePath);
      data.splice(index, 1);

      dispatch(deleteTodo(index));
      await mySky.setJSON(todosFilePath, data);
    } catch (e) {
      console.log(e);
    }
  };
}

export function requestUserLogin() {
  return async (dispatch) => {
    try {
      const mySky = await client.loadMySky();
      const isLoggedIn = await mySky.checkLogin();

      if (!isLoggedIn) {
        const status = await mySky.requestLoginAccess();
        dispatch(toggleLoginStatus(status));
        return;
      }
      dispatch(toggleLoginStatus(isLoggedIn));
    } catch (e) {
      console.log(e);
    }
  };
}

export function checkLogin() {
  return async (dispatch) => {
    const mySky = await client.loadMySky();
    const isLoggedIn = await mySky.checkLogin();
    dispatch(toggleLoginStatus(isLoggedIn));
  };
}

export function logoutUser() {
  return async (dispatch) => {
    try {
      const mySky = await client.loadMySky();
      await mySky.logout();
      dispatch(toggleLoginStatus(false));
    } catch (e) {
      console.log(e);
    }
  };
}
