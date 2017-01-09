import React, { Component } from 'react'
import Header from '../components/header'
import InputField from '../components/input-field'
import TodoList from '../components/todo-list'
import DevTools from './dev-tools';
import '../app.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-8 col-sm-offset-2">
          <div className="todo-day-container">
            <Header />
            <InputField />
            <TodoList />
            <DevTools />
          </div>
        </div>
      </div>
    );
  }
}

export default App
