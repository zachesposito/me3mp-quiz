import React, { Component } from 'react'

class QuizEnd extends Component {
  handleResetClick() {
    this.props.resetClickHandler()
  }
  render() {
    return (
      <div>
        <p>Thanks for playing!</p>
        <button onClick={this.handleResetClick.bind(this)} href=''>Reset Quiz</button>
      </div>                
    )
  }
}

export default QuizEnd