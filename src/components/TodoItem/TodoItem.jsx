import React from 'react';
import PropTypes from 'prop-types';

export const TodoItem = ({item, toggle, remove}) => {
  const toggleMe = () => {
    toggle(item.id);
  }

  const removeMe = () => {
    remove(item.id);
  }

  return (
    <li className={`list-group-item text-left ${item.status?'done':''}`}>
      <input type="checkbox" checked={item.status} onChange={toggleMe} className="mr-3" />
      {item.text}
      <button className="btn btn-outline-danger btn-sm float-right" onClick={removeMe}>Remove</button>
     </li>
  )
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
