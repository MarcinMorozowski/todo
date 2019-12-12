import React from 'react';
import PropTypes from 'prop-types';
import { connect } from "react-redux";
import { removeTodo, toggleTodo } from "../../store/actions/items.actions";

const TodoItem = ({item, toggle, remove}) => {
  const {id, text, status} = item;

  const toggleMe = () => {
    toggle(id);
  }

  const removeMe = () => {
    remove(id);
  }

  return (
    <li className={`list-group-item text-left ${status?'done':''}`}>
      <input type="checkbox" checked={status} onChange={toggleMe} className="mr-3" />
      {text}
      <button className="btn btn-outline-danger btn-sm float-right" onClick={removeMe}>Remove</button>
     </li>
  )
}

const mapStateToProps = (state, ownProps) => {
  return ownProps
}

const mapDispatchToProps = (dispatch) => {
  return {
    toggle: (id) => dispatch(toggleTodo(id)),
    remove: (id) => dispatch(removeTodo(id))
  }
}

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }).isRequired,
  toggle: PropTypes.func.isRequired,
  remove: PropTypes.func.isRequired
}

const ConnectedTodoItem = connect(mapStateToProps, mapDispatchToProps)(
  TodoItem
)

export { ConnectedTodoItem as TodoItem }