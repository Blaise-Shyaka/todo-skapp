import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { removeTodo } from '../actions/actionCreators';
import AddTask from './AddTask';

function Task(props) {
  const { todo, identifier, removeTodo } = props;

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
      <div>
        <img src="https://www.freeiconspng.com/uploads/remove-icon-png-15.png" width="20" alt="Icon Remove Library" />
      </div>
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
};

function mapDispatchToProps(dispatch) {
  return {
    removeTodo: (index) => dispatch(removeTodo(index)),
  };
}

export default connect(null, mapDispatchToProps)(Task);
