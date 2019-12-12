import React from 'react';
import './App.css';
import { InputForm } from './components/InputForm/InputForm';
import { TodoItem } from './components/TodoItem/TodoItem';
import { addTodo } from "./store/actions/items.actions";
import { useDispatch, useSelector } from 'react-redux';

function App() {
  const dispatch = useDispatch();
  const items = useSelector(state => state.items);

  const addItem = itemText => {
    dispatch(addTodo({ id: Date.now(), text: itemText, status: false }));
  };

  return (
    <div className="App">
      <main className="container">
        <h1 className="p-3">Todo list</h1>
        <InputForm add={addItem} />
        <ul className="list-group mt-5">
          {items.map((item) => (
            <TodoItem key={item.id} item={item} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;