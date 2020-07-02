import React, { Component } from 'react'

class QuizQuestionButton extends Component {
  handleClick() {
    this.props.clickHandler(this.props.text)
  }
  render() {
    return (
      <li><button onClick={this.handleClick.bind(this)}>{this.props.text}</button></li>
    )
  }
}

export default QuizQuestionButton 