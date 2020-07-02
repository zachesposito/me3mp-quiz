import React, { Component } from 'react'
import QuizQuestionButton from './QuizQuestionButton'

class QuizQuestion extends Component {
  constructor(props) {
    super(props)

    this.state = { incorrectAnswer: false }
  }
  handleClick(text) {
    if (text === this.props.question.answer) {
      this.setState({ incorrectAnswer: false })
      this.props.showNextQuestionHandler()
    } else {
      this.setState({ incorrectAnswer: true })
    }
  }
  render() {
    return (
      <main>
        <section>
          <p>{this.props.question.instructions}</p>
        </section>
        <section className="buttons">
          <ul>{this.props.question.choices.map((choice, index) => {
            return <QuizQuestionButton text={choice} key={index} clickHandler={this.handleClick.bind(this)} />
          })}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
      </main>                
    )
  }
}

export default QuizQuestion