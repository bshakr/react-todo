import React, { Component } from 'react'
import Header from '../components/header'
import InputField from '../components/input-field'
import TodoList from '../components/todo-list'
import '../app.css'

class App extends Component {
  render() {
    return (
      <div className="container">
        <div className="col-sm-6 col-sm-offset-3">
          <div className="todo-day-container">
            <Header />
            <InputField />
            <TodoList />
          </div>
        </div>
      </div>
    );
  }
}

export default App
