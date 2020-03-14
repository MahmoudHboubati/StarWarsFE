import React, { Component } from 'react';
import { reducer } from './reducer';
import PropTypes from 'prop-types';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        questions: [],
        loading: 0,
        dispatch: action => this.setState(state => reducer(state, action)),
    };

    render() {
        return (
            <Context.Provider value={this.state}>
                {this.props.children}
            </Context.Provider>
        );
    }
}

Provider.propTypes = {
    children: PropTypes.object.isRequired
};

export const {Consumer} = Context;