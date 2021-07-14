import { SkynetClient } from 'skynet-js';

const portal = window.location.hostname === 'localhost' ? 'https://siasky.net' : undefined;
const client = new SkynetClient(portal);
let mySky;

const requestLogin = async (btn) => {
  try {
    mySky = await client.loadMySky();
    const loggedIn = await mySky.checkLogin();

    if (!loggedIn) {
      btn.addEventListener('click', () => mySky.requestLoginAccess());
      return;
    }
  } catch (e) {
    console.log(e);
  }
};

export default function Login() {
  function handleLogin(e) {
    const button = e.target;
    requestLogin(button);
  }
  return <button type="button" onClick={handleLogin}>Login With MySky</button>;
}
