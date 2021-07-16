// import { useEffect } from 'react';
import { SkynetClient } from 'skynet-js';
// import { useHistory } from 'react-router-dom';
// import { show, hide } from '../styles/Login.module.css';

const portal = window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;
export const client = new SkynetClient(portal);
let userLoggedIn;

const requestLogin = async (e) => {
  try {
    const mySky = await client.loadMySky();
    const loggedIn = await mySky.checkLogin();
    const btn = e.target;

    if (!loggedIn) {
      btn.addEventListener('click', () => {
        userLoggedIn = mySky.requestLoginAccess();
        return userLoggedIn;
      });
      // return <Redirect to="/todos" />;
      return;
    }
  } catch (e) {
    console.log(e);
  }

  // return <Redirect to="/todos" />;
};

// async function loginStatus() {
//   let status;
//   try {
//     const mySky = await client.loadMySky();
//     status = await mySky.checkLogin();
//   } catch (e) {
//     console.log(e);
//   }
//   return status;
// }

export default function Login() {
  // function handleLogin(e) {
  //   const button = e.target;
  //   requestLogin(button);
  // }

  // const history = useHistory();
  // history.push('/todos');
  // let loggedIn;

  // useEffect(() => {
  //   loggedIn = loginStatus();
  //   console.log('logged in', loggedIn);
  // }, []);

  // console.log(loggedIn);
  // const cssClass = loggedIn ? hide : show;
  // console.log('css class', cssClass);

  console.log(userLoggedIn);

  return <button type="button" onClick={(e) => requestLogin(e)}>Login With MySky</button>;
}
