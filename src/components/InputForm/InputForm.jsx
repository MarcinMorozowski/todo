import React, {useState} from 'react';
import PropTypes from 'prop-types';

export const InputForm = ({add}) => {
  const [text, setText] = useState('');

  const handleChange = (event) => {
    setText(event.target.value)
  }

  const handleAdd = (event) => {
    event.preventDefault();
    add(text);
    setText('');
  }

  return (
    <form className="input-group" onSubmit={handleAdd}>
      <input type="search" value={text} onChange={handleChange} placeholder="Insert new item..." className="form-control"/>
      <div className="input-group-append">
        <button className="btn btn-primary" disabled={text.length === 0}>
          Add item
        </button>
      </div>
    </form>
  )
}

InputForm.propTypes = {
  add: PropTypes.func.isRequired
}
