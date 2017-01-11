import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'
import TodoItem from './todo-item'

class TodoList extends Component {
  componentWillMount(){
    this.props.actions.getTodos()
  }
  render() {
    const todos = this.props.todos.map((todo) => {
      return (<TodoItem actions={this.props.actions} key={todo.id} {...todo} />);
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

function mapStateToProps(state) {
  return { todos: state.todos }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoList)
