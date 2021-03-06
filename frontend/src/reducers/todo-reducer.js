function generateNextId(todos) {
  return todos.length + 1
}

let todoReducer = function(todos = [], action) {
  switch (action.type) {
    case 'GET_TODOS':
      return action.payload
    case 'ADD_TODO':
      return [{
        text: action.text,
        completed: false,
        id: generateNextId(todos)
      }, ...todos]
    case 'TOGGLE_TODO':
      return todos.map((todo) => {
        return todo.id ===   action.id ?
          Object.assign({}, todo, { completed: !todo.completed }) : todo
      })
    case 'DELETE_TODO':
      return todos.filter((todo) => {
        return todo.id !== action.id
      })
    default:
      return todos;
  }
}

export default todoReducer
