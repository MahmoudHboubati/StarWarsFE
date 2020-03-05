import React, { Component } from 'react'
import starImage from '../star.svg';
import { Consumer } from '../store/context';
import apiServices from '../store/ApiServices';
import { actions } from '../store/actions';

class AmazingButtons extends Component {

    onAmazingClick = (dispatch, details) => {
        if (details.length)
            dispatch({
                desired: actions.ERASE_QUESTIONS
            });
        else
            apiServices.loadMostAppearedPerson(dispatch);
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, details } = value;
                    const pressedClass = details.length ? "btn-pressed" : "";
                    return (
                        <button
                            className={`btn-amazing ${pressedClass}`}
                            onClick={this.onAmazingClick.bind(this, dispatch, details)}>
                            <img src={starImage} className="star" alt="*" />
                            Do. Or do not. There is no try.
                            <img src={starImage} className="star" alt="*" />
                            <div className="shiny"></div>
                        </button>
                    );
                }}
            </Consumer>
        );
    }
}

export default AmazingButtons;