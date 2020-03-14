import React, { Component } from 'react'
import PropTypes from 'prop-types';

export default class Answer extends Component {

    render() {
        let { answer } = this.props;
        return this.asArray(answer);
    }

    asArray(answer) {
        return (
            <div>{
                answer.map((ans, index) => (
                    <div className="answer" key={index}>
                        {ans}
                    </div>
                ))
            }
            </div>
        );
    }
}

Answer.propTypes = {
    answer: PropTypes.array.isRequired
};
