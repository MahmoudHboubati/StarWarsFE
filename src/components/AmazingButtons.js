import React, { Component } from 'react'
import starImage from '../star.svg';
import axios from 'axios';
import { config } from '../config';
import { Consumer } from '../store/context';
import { actions } from '../store/actions'; 

class AmazingButtons extends Component {

    //update the state
    onAmazingClick = (dispatch) => {
        axios.get(config.urls.starWars.people.API_URL_MOST_APPEARED_PERSON)
            .then(res => dispatch({ desired: actions.LOAD_MOST_APPEARED_PERSON, payload: res.data }));
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch } = value;
                    return (
                        <div>
                            <button className="btn-amazing"
                                onClick={this.onAmazingClick.bind(this, dispatch)}>
                                <img src={starImage} className="star" alt="logo" />
                                Do. Or do not. There is no try.
                                <img src={starImage} className="star" alt="logo" />
                                <div className="shiny"></div>
                            </button>
                        </div>
                    );
                }}
            </Consumer>
        );
    }
}

export default AmazingButtons;