import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo, i) => {
      return (<TodoItem key={i} todoText={todo} />);
    });

    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <ul className="todo-list">{todos}</ul>
        </div>
      </div>
    );
  } 
}

export default TodoList;
