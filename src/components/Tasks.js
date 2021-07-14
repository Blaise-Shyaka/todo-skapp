import PropTypes from 'prop-types';
import Task from './Task';

export default function Tasks(props) {
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
