import React from 'react';

export const TodoItem = ({item, update, remove}) => {
  const toggleMe = () => {
    item.status = !item.status;
    update(item);
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