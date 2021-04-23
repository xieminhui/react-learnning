/*
 * @Date: 2021-04-23 15:49:15
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-04-23 16:39:50
 * @description: 
 */

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
      
    case 'TOGGLE_TODO':
      return state.map(todo =>
          todo.id === action.id ? { ...todo, completed: !todo.completed } : todo
        )  
    default:
      return state;
  }
}

export default todos;