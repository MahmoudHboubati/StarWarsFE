import React, { Component } from 'react'
import StarWarsQuestion from './StarWarsQuestion';
import { Consumer } from '../store/context';

class StarWarsQuestions extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const { questions } = value;
                    return (
                        <div className="questions-section">
                            {questions.map((question, index) => (
                                <StarWarsQuestion
                                    key={index}
                                    question={question.question}
                                    answer={question.answer} />
                            ))}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default StarWarsQuestions;