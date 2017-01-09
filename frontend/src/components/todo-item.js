import React, { Component } from 'react';

class TodoItem extends Component {
  todoMessage() {
    if (this.props.completed) {
       return (<strike>{this.props.text}</strike>);
    } else {
      return this.props.text;
    }
  }

  handleDelete(event) {
    event.preventDefault()
    this.props.actions.deleteTodo(this.props.id)
  }

  handleToggle(event) {
    this.props.actions.toggleTodo(this.props)
  }

  render() {
    return (
      <li className="todo-item">
        <input 
          type="checkbox"
          checked={this.props.completed}
          onChange={this.handleToggle.bind(this)} />
        &nbsp;
        &nbsp;
        {this.todoMessage()}
        <button className="btn btn-xs btn-danger pull-right" onClick={this.handleDelete.bind(this)}>Delete</button>
      </li>
    );
  }
}

export default TodoItem;
