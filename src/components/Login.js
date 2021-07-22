import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import PropTypes from 'prop-types';
import { checkLogin, fetchTodos, requestUserLogin } from '../actions/actionCreators';
import * as loginStyles from '../styles/Login.module.css';

function Login(props) {
  const {
    userLoggedIn, requestUserLogin, checkLogin, fetchTodos,
  } = props;

  const { loginButton } = loginStyles;

  // Check the login status of the user
  checkLogin();

  // Redirect to the /todos page if the user is logged in
  if (userLoggedIn) {
    fetchTodos();
    const history = useHistory();
    history.push('/todos');
  }

  return <button className={loginButton} type="button" onClick={requestUserLogin}>Login With MySky</button>;
}

function mapStateToProps(state) {
  const { userLoggedIn } = state;
  return { userLoggedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    requestUserLogin: () => dispatch(requestUserLogin()),
    checkLogin: () => dispatch(checkLogin()),
    fetchTodos: () => dispatch(fetchTodos()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);

Login.propTypes = {
  userLoggedIn: PropTypes.bool.isRequired,
  requestUserLogin: PropTypes.func.isRequired,
  checkLogin: PropTypes.func.isRequired,
  fetchTodos: PropTypes.func.isRequired,
};
