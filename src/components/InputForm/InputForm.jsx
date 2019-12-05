import React, {useState} from 'react';

export const InputForm = ({onSubmit}) => {
  const [text, setText] = useState('');

  const handleAdd = (event) => {
    event.preventDefault();
    onSubmit(text);
    setText('');
  }

  return (
    <form className="input-group">
      <input type="search" value={text} onChange={event => setText(event.target.value)} placeholder="Insert new item..." className="form-control"/>
      <div className="input-group-append">
        <button onClick={handleAdd} className="btn btn-primary" disabled={text.length === 0}>
          Add item
        </button>
      </div>
    </form>
  )
}
