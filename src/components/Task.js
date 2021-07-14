import PropTypes from 'prop-types';
import AddTask from './AddTask';

export default function Task(props) {
  const { todo } = props;
  const { title, tasks } = todo;
  const tasksMarkup = tasks.map((task) => (
    <li key={tasks.indexOf(task)}>
      <input type="checkbox" />
      {' '}
      <span>
        {' '}
        {task}
        {' '}
      </span>
    </li>
  ));

  return (
    <div>
      <h3>{title}</h3>
      <ul>
        {tasksMarkup}
      </ul>
      <AddTask />
    </div>
  );
}

Task.propTypes = {
  todo: PropTypes
    .shape({ title: PropTypes.string, tasks: PropTypes.arrayOf(PropTypes.string) })
    .isRequired,
};
