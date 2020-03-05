import React, { Component } from 'react'
import StarWarsInformationDetail from './StarWarsInformationDetail';
import { Consumer } from '../store/context';

class StarWarsInformation extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const details = value.details;
                    return (
                        <div className="questions-section">
                            {details.map(detail => (
                                <StarWarsInformationDetail
                                    key={detail.id}
                                    question={detail.question}
                                    answer={detail.answer} />
                            ))}
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default StarWarsInformation;