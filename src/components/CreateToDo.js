import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { postTodo } from '../actions/actionCreators';

function CreateToDo(props) {
  const { createTodo } = props;

  function handleCreateTodo() {
    const title = document.querySelector('#new-todo').value;
    const data = {
      title,
      tasks: [],
    };

    createTodo(data);
  }

  return (
    <div>
      <input id="new-todo" type="text" />
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
