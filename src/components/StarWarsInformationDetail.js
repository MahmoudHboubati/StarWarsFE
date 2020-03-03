import React, { Component } from 'react'

class StarWarsInformationDetail extends Component {
    render() {

        let { question } = this.props;

        return (
            <div className="questions-section">
                <div className="question-answer">
                    <div className="question">{question}</div>
                    <div id="mostAppearedAnswer" className="answer">Some answer</div>
                </div>
            </div>
        )
    }
}

export default StarWarsInformationDetail;