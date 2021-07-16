import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import Task from './Task';

function Tasks(props) {
  const { todos } = props;
  const tasksMarkup = todos.map((todo) => <Task key={todos.indexOf(todo)} todo={todo} />);
  return (
    <div>
      {' '}
      {tasksMarkup}
      {' '}
    </div>
  );
}

Tasks.propTypes = {
  todos: PropTypes
    .arrayOf(PropTypes.shape({ title: PropTypes.arrayOf(PropTypes.string) }))
    .isRequired,
};

function mapStateToProps(state) {
  const { todos } = state;
  return todos;
}

export default connect(mapStateToProps)(Tasks);
