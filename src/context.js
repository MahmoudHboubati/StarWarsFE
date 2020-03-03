import React, { Component } from 'react';

const Context = React.createContext();

export class Provider extends Component {

    state = {
        details: [{
            id: 1,
            question: "What character (person) appeared in the most of StarWars films?"
        }]
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