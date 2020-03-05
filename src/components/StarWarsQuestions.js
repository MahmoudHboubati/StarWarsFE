import React, { Component } from 'react'
import StarWarsQuestion from './StarWarsQuestion';
import { Consumer } from '../store/context';

class StarWarsQuestions extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const questions = value.questions;
                    return (
                        <div className="questions-section">
                            {questions.map(question => (
                                <StarWarsQuestion
                                    key={question.id}
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