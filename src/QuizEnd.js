import React from 'react';
import PropTypes from 'prop-types';

const QuizEnd = props => (
  <div>
    <p>Your score: {props.finalScore}</p>
    <button onClick={props.resetQuiz} href=''>Reset Quiz</button>
  </div>                
)

QuizEnd.propTypes = {
  resetQuiz: PropTypes.func.isRequired
};

export default QuizEnd;