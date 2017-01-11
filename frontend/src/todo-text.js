import React, { Component } from 'react';

class TodoText extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-12 center">
          <div className="label label-default">{ this.props.todoText }</div>
        </div>
      </div>
    );
  }
}

export default TodoText;
