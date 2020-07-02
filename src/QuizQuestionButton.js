import React from 'react';
import PropTypes from 'prop-types';

const QuizQuestionButton = props => <li><button {...props} /></li>;

QuizQuestionButton.propTypes = {
  children: PropTypes.node.isRequired,
};

export default QuizQuestionButton;