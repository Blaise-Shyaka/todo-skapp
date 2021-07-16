import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { logoutUser } from '../actions/actionCreators';
import Task from './Task';

function Tasks(props) {
  const { todos, logoutUser, userLoggedIn } = props;
  const tasksMarkup = todos.map((todo) => <Task key={todos.indexOf(todo)} todo={todo} />);

  function logout() {
    logoutUser();
  }

  const history = useHistory();
  if (!userLoggedIn) {
    history.push('/');
  }

  return (
    <div>
      <div>
        <button type="button" onClick={logout}>Logout</button>
      </div>
      <div>
        {tasksMarkup}
      </div>
    </div>
  );
}

Tasks.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes.shape({ title: PropTypes.arrayOf(PropTypes.string) }))
    .isRequired,
  logoutUser: PropTypes.func.isRequired,
  userLoggedIn: PropTypes.string.isRequired,
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
