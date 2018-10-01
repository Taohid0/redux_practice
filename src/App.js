import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {store} from "./redux/store";
import {addTodo} from "./redux/actions";

class App extends Component {

  constructor(props)
  {
    super(props);
    this.addTodoStore = this.addTodoStore.bind(this);
    this.testReducer = this.testReducer.bind(this);
  }
  addTodoStore()
  {
    store.dispatch(addTodo("hello"));
    console.log(store.getState());
  }
  componentWillMount()
  {
    this.testReducer();
  }
  testReducer()
  {
    console.log(store.getState());
  }
  render() {
    return (
      <div className="App">
      <button onClick={this.addTodoStore}>Hello</button>
      </div>
    );
  }
}

export default App;
