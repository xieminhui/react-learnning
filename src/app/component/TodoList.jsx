/*
 * @Date: 2021-04-23 15:12:18
 * @LastEditors: xieminhui
 * @LastEditTime: 2021-04-23 15:23:11
 * @description: 
 */

import PropTypes from 'prop-types'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick }) => (
  <ul>
    {todos.map((todo, index) => {
      <Todo key={index} {...todo} onClick={() => onTodoClick} />
    })}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList