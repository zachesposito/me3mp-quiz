import React from 'react';
import QuizQuestion from './QuizQuestion';
import QuizEnd from './QuizEnd';
import styled from 'styled-components';

let quizData = require('./quizData.json');

const QuizContainer = styled.div`
  padding: 1em;
  width:500px;
  display:inline-block;
  vertical-align:top;
`;
const Container = styled.div`
  width:1000px;
  margin:auto;
`;

class Quiz extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = { 
      quizPosition: 1,
      score: 0
    };
  }
  showNextQuestion() {
    this.setState((state) => {
      return {quizPosition: state.quizPosition + 1};
    })
  }
  resetQuiz() {
    this.setState({ 
      quizPosition: 1,
      score: 0
    });
  }
  incrementScore() {
    this.setState((state) => {
      return { score: state.score + 1 };
    });
  }
  render() {
    const isQuizEnd = (this.state.quizPosition - 1) === quizData.questions.length;
    return (
      <Container>
        <h1>What's Your Special Ops Rank?</h1>
        <h2>Test your Mass Effect 3 multiplayer knowledge</h2>
        <img src="/salarian.png"></img>
        <QuizContainer>
          {isQuizEnd ?
            <QuizEnd resetQuiz={this.resetQuiz.bind(this)} finalScore={this.state.score} /> :
            <QuizQuestion 
              question={quizData.questions[this.state.quizPosition - 1]} 
              showNextQuestionHandler={this.showNextQuestion.bind(this)} 
              incrementScoreHandler={this.incrementScore.bind(this)}
            />
          }
        </QuizContainer>
        <img src="/geth.png"></img>
      </Container>
    )
  }
}

export default Quiz;