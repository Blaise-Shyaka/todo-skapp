import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTask, removeTodo } from '../actions/actionCreators';
import AddTask from './AddTask';

function Task(props) {
  const {
    todo, identifier, removeTodo, removeTask,
  } = props;

  const { title, tasks } = todo;
  const tasksMarkup = tasks.map((task) => (
    <li key={tasks.indexOf(task)}>
      <div>
        <input type="checkbox" />
        {' '}
        <span>
          {' '}
          {task}
          {' '}
        </span>
      </div>
      <button type="button" onClick={() => removeTask({ todoIndex: identifier, taskIndex: tasks.indexOf(task) })}>
        <img src="https://www.freeiconspng.com/uploads/remove-icon-png-15.png" width="20" alt="Icon Remove Library" />
      </button>
    </li>
  ));

  return (
    <div>
      <div>
        <h3>{title}</h3>
        <button type="button" onClick={() => removeTodo(identifier)}>
          <img src="https://www.freeiconspng.com/uploads/remove-icon-png-25.png" width="25" alt="Icon Remove Pictures" />
        </button>
      </div>
      <ul>
        {tasksMarkup}
      </ul>
      <AddTask todoIdentifier={identifier} title={title} />
    </div>
  );
}

Task.propTypes = {
  todo: PropTypes
    .shape({ title: PropTypes.string, tasks: PropTypes.arrayOf(PropTypes.string) })
    .isRequired,
  identifier: PropTypes.number.isRequired,
  removeTodo: PropTypes.func.isRequired,
  removeTask: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return state;
}

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: (index) => dispatch(removeTodo(index)),
    removeTask: (indices) => dispatch(removeTask(indices)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Task);
