import React from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';

let quizData = require('./quizData.json');

class Quiz extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { quizPosition: 1 };
  }
  showNextQuestion() {
    this.setState((state) => {
      return {quizPosition: state.quizPosition + 1};
    })
  }
  resetQuiz() {
    this.setState({ quizPosition: 1 });
  }
  render() {
    const isQuizEnd = (this.state.quizPosition - 1) === quizData.questions.length;
    return (
      <div>
        {isQuizEnd ?
          <QuizEnd resetQuiz={this.resetQuiz.bind(this)} /> :
          <QuizQuestion question={quizData.questions[this.state.quizPosition - 1]} showNextQuestionHandler={this.showNextQuestion.bind(this)} />
        }
      </div>
    )
  }
}

export default Quiz;