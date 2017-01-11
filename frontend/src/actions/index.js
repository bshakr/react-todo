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
    const request = axios.post(`${API_URL}/todos`, { text: text })

    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'ADD_TODO',
          text: text
        })
      })
    }
  },

  toggleTodo: function(todo) {
    const request = axios.patch(`${API_URL}/todos/${todo.id}`, { completed: !todo.completed })
    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'TOGGLE_TODO',
          id: todo.id
        })
      })
    }
  },
  
  deleteTodo: function(id) {
    const request = axios.delete(`${API_URL}/todos/${id}`)
    return (dispatch) => {
      request.then((response) => {
        dispatch({
          type: 'DELETE_TODO',
          id: id
        })
      })
    }
  }
}

export default actions
