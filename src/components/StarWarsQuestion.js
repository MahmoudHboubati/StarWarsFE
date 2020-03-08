import React, { Component } from 'react'
import Answer from './Answer';

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

export default StarWarsQuestion;