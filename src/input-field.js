import React, { Component } from 'react';


class InputField extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <input 
            onKeyPress={this.props.addTodo}
            type="text" 
            className="form-control input-lg" 
            placeholder="Enter a todo" />
        </div>
      </div>
    );
  }
}

export default InputField
