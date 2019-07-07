import React from 'react'
import TodoItem from './TodoItem'

const TodoList = ({ sortedTodoList, rulesOfSort }) => (
  <table>
    <thead>
      <tr>
        <th>ID</th>
        <th onClick={() => {
          rulesOfSort('byTitle')
        }}>Content</th>
        <th onClick={() => {
          rulesOfSort('byName')
        }}>Name</th>
        <th onClick={() => {
          rulesOfSort('byCompleted')
        }}>Completed</th>
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