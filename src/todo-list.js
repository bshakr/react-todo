import React, { Component } from 'react';
import TodoItem from './todo-item';

class TodoList extends Component {
  render() {
    const todos = this.props.todos.map((todo, i) => {
      return (<TodoItem complete={this.props.complete} key={i} todo={todo} />);
    });

    return (
      <div className="row">
        <div className="col-sm-6 col-sm-offset-3">
          <ul className="todo-list">{todos}</ul>
        </div>
      </div>
    );
  } 
}

export default TodoList;
