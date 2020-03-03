import React, { Component, Fragment } from 'react'
import StarWarsInformationDetail from './StarWarsInformationDetail';
import { Consumer } from '../context';

class StarWarsInformation extends Component {
    render() {
        return (
            <Consumer>
                {value => {
                    const details = value.details;
                    return (
                        <Fragment>
                            {details.map(detail => (
                                <StarWarsInformationDetail
                                    key={detail.id}
                                    question={detail.question} />
                            ))}
                        </Fragment>
                    );
                }}
            </Consumer>
        );
    }
}

export default StarWarsInformation;