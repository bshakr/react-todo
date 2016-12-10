import React, { Component } from 'react';

class TodoItem extends Component {
  render() {
    return <li className="todo-item">{this.props.todoText}</li>
  }
}

export default TodoItem;
