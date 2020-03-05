import React, { Component } from 'react'

class StarWarsQuestion extends Component {
    render() {

        let { question, answer } = this.props;

        return (
            <div className="question-answer">
                <div className="question">{question}</div>
                <div id="mostAppearedAnswer" className="answer">{answer}</div>
            </div>
        )
    }
}

export default StarWarsQuestion;