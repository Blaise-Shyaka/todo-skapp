import { SkynetClient } from 'skynet-js';
import {
  ADD_TASK, ADD_TODO, TOGGLE_LOGIN_STATUS, UPDATE_TODOS,
} from './actionTypes';

const portal = window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;
export const client = new SkynetClient(portal);

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
      const { data } = await mySky.setJSON('https://siasky.net/todos.json', todo);
      dispatch(addToDo(data));
    } catch (e) {
      console.log(e);
    }
  };
}

export function postTask(task) {
  return async (dispatch) => {
    try {
      const mySky = await client.loadMySky();
      const { data } = await mySky.getJSON('https://siasky.net/todos.json');
      const todo = data.find((todo) => todo.title === task.title);
      todo.tasks.push(task.task);
      dispatch(addTask(task));
      await mySky.setJSON('https://siasky.net/todos.json', data);
    } catch (e) {
      console.log(e);
    }
  };
}

export function fetchTodos() {
  return async (dispatch) => {
    try {
      const mySky = await client.loadMySky();
      const { data } = await mySky.getJSON('https://siasky.net/todos.json');
      dispatch(updateTodos(data));
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
