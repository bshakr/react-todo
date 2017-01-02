import React, { Component } from 'react';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import actions from '../actions'

class InputField extends Component {
  constructor() {
    super();
    this.state = {
      inputText: ''
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    this.props.actions.addTodo(this.state.inputText)
    this.setState({ inputText: '' })
  }

  handleChange(event) {
    this.setState({
      inputText: event.target.value
    })
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-10 col-sm-offset-1">
          <form onSubmit={this.handleSubmit.bind(this)}>
            <input 
              type="text" 
              placeholder="Enter a todo"
              value={this.state.inputText}
              onChange={this.handleChange.bind(this)}
              className="form-control input-lg" />
            </form>
        </div>
      </div>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return {
    actions: bindActionCreators(actions, dispatch)
  }
}

function mapStateToProps(state){
  return state
}

export default connect(mapStateToProps, mapDispatchToProps
    )(InputField)
