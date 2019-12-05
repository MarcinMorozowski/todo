import React, { useState } from 'react';
import './App.css';
import { InputForm } from './components/InputForm/InputForm.jsx';
import { TodoItem } from './components/TodoItem/TodoItem';

function App() {
  const [items, setItems] = useState([]);

  const addItem = itemText => {
    setItems([...items, { id: Date.now(), text: itemText, status: false }]);
  };

  const updateItem = item => {
    let newItems = items,
      pos = items.findIndex(el => el.id === item.id);

    newItems[pos].status = item.status;
    setItems([...newItems]);
  };

  const removeItem = id => {
    setItems(items.filter(el => el.id !== id));
  };

  return (
    <div className="App">
      <main className="container">
        <div className="row">
          <div className="col">
            <h1 className="p-3">Todo list</h1>
            <InputForm onSubmit={itemText => addItem(itemText)} />
          </div>
        </div>
        <div className="row">
          <div className="col">
            <ul className="list-group mt-5">
              {items.map((item, index) => (
                <TodoItem key={item.id} item={item} update={updateItem} remove={removeItem} />
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
