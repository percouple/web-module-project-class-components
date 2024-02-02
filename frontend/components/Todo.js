import React from 'react'


export default class Todo extends React.Component {
  render() {
    const { todo, onClick, checkedTodos } = this.props;

    return (
      <div onClick={() => onClick(todo)}>
        {todo}{checkedTodos.includes(todo) && <div>✔️</div>}
      </div>
    )
  }
}
