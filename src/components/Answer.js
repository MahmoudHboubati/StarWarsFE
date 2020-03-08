import React, { Component } from 'react'

export default class Answer extends Component {

    render() {
        let { answer } = this.props;
        if (typeof answer === 'string')
            return this.asPlainText(answer)
        else if (Array.isArray(answer))
            return this.asArray(answer);
        else
            return (<div>Sorry: answer type is not supported</div>)
    }

    asArray(answer) {
        return (<div>{answer.map(ans => (
            <div className="answer">
                <span>{ans.name} ({ans.count})</span>
            </div>
        ))}</div>);
    }

    asPlainText(answer) {
        return (<div id="mostAppearedAnswer" className="answer">{answer}</div>);
    }
}
