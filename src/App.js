import React, { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm/InputForm';
import { TodoItem } from './components/TodoItem/TodoItem';

function App() {
  const [items, setItems] = useState([]);

  const addItem = itemText => {
    setItems([...items, { id: Date.now(), text: itemText, status: false }]);
  };

  const toggleItem = id => {
    const updatedItems = items.map((item) =>
      item.id === id ? {...item, status: !item.status} : item
    );
    setItems(updatedItems)
  };

  const removeItem = id => {
    setItems(items.filter(el => el.id !== id));
  };

  return (
    <div className="App">
      <main className="container">
        <h1 className="p-3">Todo list</h1>
        <InputForm add={addItem} />
        <ul className="list-group mt-5">
          {items.map((item) => (
            <TodoItem key={item.id} item={item} toggle={toggleItem} remove={removeItem} />
          ))}
        </ul>
      </main>
    </div>
  );
}

export default App;
