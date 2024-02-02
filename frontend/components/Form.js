import React from 'react'

export default class Form extends React.Component {

  render() {
    const {onSubmit, onInputChange, userInput, clearCompleted} = this.props;

    return (
    <div>
      <form onSubmit={(e) => onSubmit(e)}>
        <input placeholder="Type to-do here" onChange={onInputChange} value={userInput}/>
        <input type="submit" />
      </form>
        <button onClick={(e) => clearCompleted(e)}>Clear Completed</button>
    </div>
    )
  }
}
