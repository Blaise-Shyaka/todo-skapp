import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { postTask } from '../actions/actionCreators';

function AddTask(props) {
  const { title, todoIdentifier, postTask } = props;
  const inputEltId = `task-text-${todoIdentifier}`;

  function handleAddTask() {
    console.log(inputEltId, 'clicked');
    const text = document.querySelector(`#${inputEltId}`).value;
    const task = {
      title,
      task: text,
    };

    postTask(task);
    document.querySelector(`#${inputEltId}`).value = '';
  }

  return (
    <div>
      <input id={inputEltId} type="text" />
      <button type="button" onClick={handleAddTask}>Add Task</button>
    </div>
  );
}

AddTask.propTypes = {
  title: PropTypes.string.isRequired,
  todoIdentifier: PropTypes.number.isRequired,
  postTask: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return {
    postTask: (task) => dispatch(postTask(task)),
  };
}

export default connect(null, mapDispatchToProps)(AddTask);
