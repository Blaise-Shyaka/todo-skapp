import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postTodo } from '../actions/actionCreators';
import * as createTodoStyles from '../styles/CreateToDo.module.css';

function CreateToDo(props) {
  const { createTodo } = props;
  const { creatingTodo } = createTodoStyles;

  function handleCreateTodo() {
    const title = document.querySelector('#new-todo').value;
    const data = {
      title,
      tasks: [],
    };

    createTodo(data);
  }

  return (
    <div className={creatingTodo}>
      <input id="new-todo" type="text" placeholder="Todo Title" />
      <button type="button" onClick={handleCreateTodo}>Create Todo</button>
    </div>
  );
}

function mapDispatchToProps(dispatch) {
  return {
    createTodo: (data) => dispatch(postTodo(data)),
  };
}

export default connect(null, mapDispatchToProps)(CreateToDo);

CreateToDo.propTypes = {
  createTodo: PropTypes.func.isRequired,
};
