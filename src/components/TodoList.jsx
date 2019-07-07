import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ sortedTodoList, rulesOfSort }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th onClick={rulesOfSort}>Content</th>
        <th>Name</th>
        <th>Completed</th>
      </tr>
    </thead>
    <tbody>
      {
        sortedTodoList.map(todo => (
          <TodoItem todo={todo}/>
        ))
      }
    </tbody>
  </table>
)

export default TodoList