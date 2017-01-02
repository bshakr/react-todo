import axios from 'axios'
const API_URL = 'http://localhost:3030/api/v1'

let actions = {
  getTodos: function() {
    const request = axios.get(`${API_URL}/todos`)
    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'GET_TODOS',
          payload: response.data
        })
      })
    }
  },
  addTodo: function(text) {
    return {
      type: 'ADD_TODO',
      text: text
    }
  },
 
  completeTodo: function(id) {
    return {
      type: 'COMPLETE_TODO',
      id: id
    }
  },
  
  deleteTodo: function(id) {
    return {
      type: 'DELETE_TODO',
      id: id
    }
  }
}

export default actions
