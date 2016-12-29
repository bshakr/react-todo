import React, { Component } from 'react';

class InputField extends Component {
  constructor() {
    super();
    this.validateSubmit = this.validateSubmit.bind(this);

  }
  validateSubmit(event) {
    if (event.key === 'Enter' && event.target.value !== '') {
      this.props.addTodo(event);
    }
  }
  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <input 
            onKeyPress={this.validateSubmit}
            type="text" 
            className="form-control input-lg" 
            placeholder="Enter a todo" />
        </div>
      </div>
    );
  }
}

export default InputField
