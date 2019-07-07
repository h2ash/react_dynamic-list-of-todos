import React from 'react'

const TodoItem = ({ todo }) => (
  <tr>
    <td>{todo.id}</td>
    <td>{todo.title}</td>
    <td>{todo.user.name}</td>
    <td>
      {
        todo.completed
          ? 'yes'
          : 'no'
      }
    </td>
  </tr>
)

export default TodoItem