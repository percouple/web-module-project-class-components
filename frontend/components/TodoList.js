import React from 'react'
import Todo from '../components/Todo'

export default class TodoList extends React.Component {

  
  render() {

    const onClick = this.props.onClick;
    const todoList = this.props.todos;
    const checkedTodos = this.props.checkedTodos;

    return (
      todoList.map((todo, index) => {
        return <Todo todo={todo} key={index} onClick={onClick} checkedTodos={checkedTodos}/>
      })
    )
  }
}
