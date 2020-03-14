import React, { Component } from 'react'
import Answer from './Answer';
import PropTypes from 'prop-types';

class StarWarsQuestion extends Component {
    render() {

        let { question, answer } = this.props;

        return (
            <div className="question-answer">
                <div className="question">{question}</div>
                <Answer answer={answer}></Answer>
            </div>
        )
    }
}

StarWarsQuestion.propTypes = {
    answer: PropTypes.array.isRequired,
    question: PropTypes.string.isRequired
};

export default StarWarsQuestion;