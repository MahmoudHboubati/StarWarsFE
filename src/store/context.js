import React, { Component } from 'react';
import { reducer } from './reducer';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        details: [],
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

export const Consumer = Context.Consumer;