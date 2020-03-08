import React, { Component } from 'react'

export default class Answer extends Component {

    render() {
        let { answer } = this.props;
        if (typeof answer === 'string')
            return this.asPlainText(answer)
        else if (Array.isArray(answer))
            return this.asArray(answer);
        else if (typeof answer === 'object')
            return this.asObject(answer)
        else
            return (<div>Sorry: answer type is not supported</div>)
    }

    asArray(answer) {
        return (
            <div>{answer.map((ans, index) => (
                <div className="answer" key={index}>
                    <span>{ans.name} ({ans.count})</span>
                </div>
            ))}
            </div>);
    }

    asPlainText(answer) {
        return (<div className="answer">{answer}</div>);
    }

    asObject(answer) {
        return (
            <div>{answer.items.map((item, index) => (
                <div className="answer" key={index}>
                    <span>{answer.resolver(item)}</span>
                </div>
            ))}
            </div>
        );
    }
}
