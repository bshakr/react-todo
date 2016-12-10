import React, { Component } from 'react';
import Header from './header';
import InputField from './input-field';
import TodoList from './todo-list';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = { todoText: '', todos: [] };
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    if (event.key === 'Enter') {
      this.state.todos.push(event.target.value);
      event.target.value = '';
      this.setState({ todos: this.state.todos });
    }
  }

  render() {
    return (
        <div className="container">
          <Header />
          <InputField addTodo={this.addTodo}/>
          <TodoList todos={this.state.todos} />
        </div>
    );
  }
}

export default App;
