import React, { Component } from 'react';

class TodoItem extends Component {
  todoMessage() {
    if (this.props.todo.isComplete) {
       return (<strike>{this.props.todo.text}</strike>);
    } else {
      return this.props.todo.text;
    }
  }

  render() {
    return (
      <li className="todo-item">
        <input 
          type="checkbox"
          checked={this.props.todo.isComplete}
          onChange={() => this.props.complete(this.props.todo.text)} />
        &nbsp;
        &nbsp;
        {this.todoMessage()}
      </li>
    );
  }
}

export default TodoItem;
