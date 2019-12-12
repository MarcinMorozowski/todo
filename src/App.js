import React from 'react';
import './App.css';
import { InputForm } from './components/InputForm/InputForm';
import { TodoItem } from './components/TodoItem/TodoItem';
import { connect } from "react-redux";
import { addTodo } from "./store/actions/items.actions";

function App({items, add}) {

  const addItem = itemText => {
    add({ id: Date.now(), text: itemText, status: false });
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

const mapStateToProps = ({items}) => {
  return {
    items
  }
}

const mapDispatchToProps = dispatch => {
  return {
    add: (item) => dispatch(addTodo(item))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(
  App
)
