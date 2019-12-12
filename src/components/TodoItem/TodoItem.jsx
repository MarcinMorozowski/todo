import React from 'react';
import PropTypes from 'prop-types';
import { removeTodo, toggleTodo } from "../../store/actions/items.actions";
import { useDispatch } from 'react-redux';

export const TodoItem = ({item}) => {
  const {id, text, status} = item;
  const dispatch = useDispatch();

  const toggle = () => dispatch(toggleTodo(id));
  const remove = () => dispatch(removeTodo(id));

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

TodoItem.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    status: PropTypes.bool.isRequired
  }).isRequired
}
