import React from 'react';
import ButtonNotLoaded from './components/ButtonNotLoaded'
import TodoList from './components/TodoList'

class App extends React.Component {
  state = {
    todoList: null,
    sortedTodoList: null,
    direction: 1,
    isLoading: false,
    isLoaded: false,
  }

  getData = async () => {
    this.setState({
      isLoading: true,
    })

    const linkTodos = 'https://jsonplaceholder.typicode.com/todos';
    const linkUsers = 'https://jsonplaceholder.typicode.com/users';

    const responseTodos = await fetch(linkTodos);
    const responseUsers = await fetch(linkUsers);

    const todos = await responseTodos.json();
    const users = await responseUsers.json();

    const todosWithUser = todos.map(todo => ({
      ...todo,
      user: users.find(user => user.id === todo.userId),
    }));

    this.setState({
      todoList: todosWithUser,
      sortedTodoList: todosWithUser,
      isLoaded: true,
      isLoading: false,
    })
  }

  rulesOfSort = () => (
    this.setState(state => ({
      direction: state.direction === 1 ? -1 : 1,
      sortedTodoList: [...state.todoList].sort(
        (a, b) => a.title.localeCompare(b.title) * state.direction
        // (a, b) => (a - b)
        //  
      )
    }))
  )

  render() {
    return (
      <div>
        {
          this.state.isLoaded
            ? (
              <TodoList 
                sortedTodoList={this.state.sortedTodoList}
                rulesOfSort={this.rulesOfSort}
              />
            )
            : (
              <ButtonNotLoaded 
                isLoading={this.state.isLoading} 
                getData={this.getData}
              />
            )
        }
      </div>
    )
  }
}

export default App;
