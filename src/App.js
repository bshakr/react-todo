import React, { Component } from 'react';
import Header from './header';
import InputField from './input-field';
import TodoList from './todo-list';
import './app.css';

class App extends Component {
  constructor() {
    super();
    this.state = { todoText: '', todos: [] };
    this.completeTodo = this.completeTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  addTodo(event) {
    this.state.todos.push({ text: event.target.value, isComplete: false });
    event.target.value = '';
    this.setState({ todos: this.state.todos });
  }

  completeTodo(todo) {
    const todos = this.state.todos.map((t) => {
      if(t.text !== todo) {
        return t
      } else {
        t.isComplete = !t.isComplete
        return t
      }
    }).sort((a, b) => {
      if(a.isComplete === b.isComplete){
        return 0;
      }
      if(a.isComplete === true) {
        return 1;
      } else {
        return -1;
      }
    });
    this.setState({ todos: todos });
  }
    

  render() {
    return (
        <div className="container">
          <div className="col-sm-6 col-sm-offset-3">
            <div className="todo-day-container">
              <Header />
              <InputField addTodo={this.addTodo}/>
              <TodoList complete={this.completeTodo} todos={this.state.todos} />
            </div>
          </div>
        </div>
    );
  }
}

export default App;
