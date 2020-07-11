import React from 'react';
import PropTypes from 'prop-types';
import QuizQuestionButton from './QuizQuestionButton';

class QuizQuestion extends React.PureComponent {
  static propTypes = {
    question: PropTypes.shape({
      instructions: PropTypes.string,
      choices: PropTypes.arrayOf(PropTypes.string),
      answer: PropTypes.shape({
        id: PropTypes.number,
        label: PropTypes.string
      })
    }).isRequired,
    showNextQuestionHandler: PropTypes.func.isRequired
  };

  constructor(props) {
    super(props);

    this.state = { incorrectAnswer: false };
  }
  submitAnswer(choiceId) {
    const { 
      question,
      showNextQuestionHandler
    } = this.props;
    if (choiceId === question.answer) {
      this.setState({ incorrectAnswer: false });
      showNextQuestionHandler();
    } else {
      this.setState({ incorrectAnswer: true });
    }
  }
  render() {
    const {
      question,
      showNextQuestionHandler: _showNextQuestionHandler,
      ...rest
    } = this.props;
    return (
      <main {...rest}>
        <section>
          <p>{question.instructions}</p>
        </section>
        <section className="buttons">
          <ul>{question.choices.map((choice, index) => {
            return <QuizQuestionButton onClick={() => this.submitAnswer(choice.id)} >{choice.label}</QuizQuestionButton>
          })}
          </ul>
        </section>
        {this.state.incorrectAnswer ? <p className='error'>Sorry, that's not right</p> : null}
      </main>                
    )
  }
}

export default QuizQuestion