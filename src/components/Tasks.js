import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../actions/actionCreators';
import Task from './Task';
import * as tasksStyles from '../styles/Tasks.module.css';

function Tasks(props) {
  const { todos, logoutUser, userLoggedIn } = props;
  const { logoutBtn, tasksContainer } = tasksStyles;

  const tasksMarkup = todos.map((todo) => (
    <Task
      key={todos.indexOf(todo)}
      identifier={todos.indexOf(todo)}
      todo={todo}
    />
  ));

  function logout() {
    logoutUser();
  }

  const history = useHistory();
  if (!userLoggedIn) {
    history.push('/');
  }

  return (
    <div>
      <div className={logoutBtn}>
        <button type="button" onClick={logout}>Logout</button>
      </div>
      <div className={tasksContainer}>
        {tasksMarkup}
      </div>
    </div>
  );
}

Tasks.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes.shape(
      {
        title: PropTypes.string,
        tasks: PropTypes.arrayOf(PropTypes.string),
      },
    ))
    .isRequired,
  logoutUser: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.bool.isRequired,
};

function mapStateToProps(state) {
  const { todos, userLoggedIn } = state;
  return { todos, userLoggedIn };
}

function mapDispatchToProps(dispatch) {
  return {
    logoutUser: () => dispatch(logoutUser()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Tasks);
