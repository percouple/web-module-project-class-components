import React from 'react';
import Form from '../components/Form';
import TodoList from './TodoList';


export default class App extends React.Component {
  constructor() {
    super();
    this.state = {
      todoArray: ['Walk the dog', 'Learn React', 'Have fun'],
      userInput: '',
      checkedTodos: []
    }
    console.log(this.state.userInput);

  }

  checker = (e) => {
    if (!this.state.checkedTodos.includes(e)) {
      this.setState({ ...this.state, checkedTodos: [...this.state.checkedTodos, e] })
    } else if (this.state.checkedTodos.includes(e)) {
      this.setState(prevState => ({
        checkedTodos: prevState.checkedTodos.filter(todo => todo !== e)
      }))
    }
  }

  inputChangeHandler = (e) => {
    this.setState({ ...this.state, userInput: e.target.value })
  }

  onSubmit = (e) => {
    e.preventDefault();
    this.setState({ ...this.state, userInput: '', todoArray: [...this.state.todoArray, this.state.userInput] })
  }

  clearCompleted = (e) => {

    this.state.checkedTodos.forEach((checkedTodo) => {

      const updatedTodoArray = this.state.todoArray.filter(todo => !this.state.checkedTodos.includes(todo));

      this.setState({
        todoArray: updatedTodoArray,
        checkedTodos: [],
      })
    }
    )

    console.log("HEYO WE DIDIT WE CLEARED THE CHECKED ONES")
  }

  render() {
    return (
      <>
        <h2>
          Todos:
        </h2>
        <div>
          <TodoList
            todos={this.state.todoArray}
            onClick={this.checker}
            checkedTodos={this.state.checkedTodos} />
          <Form
            onSubmit={this.onSubmit}
            onInputChange={this.inputChangeHandler}
            userInput={this.state.userInput}
            clearCompleted={this.clearCompleted} />
        </div>
      </>
    )
  }
}
