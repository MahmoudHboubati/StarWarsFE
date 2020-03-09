import React, { Component } from 'react'
import starImage from './../resources/star.svg';
import { Consumer } from '../store/context';
import { actions } from '../store/actions';
import apiServices from '../store/services/ApiServices';
import filmServiceApi from '../store/services/FilmServiceApi';
import planetServiceApi from '../store/services/PlanetServiceApi';
import peopleServiceApi from '../store/services/PeopleServiceApi';

class AmazingButtons extends Component {

    onAmazingClick = (dispatch, questions) => {
        if (questions.length)
            dispatch({
                desired: actions.ERASE_QUESTIONS
            });
        else {
            peopleServiceApi.loadMostAppearedPerson(dispatch);
            apiServices.loadMostAppearedInSpecies(dispatch);
            filmServiceApi.loadLongestOpeningCrawl(dispatch);
            planetServiceApi.loadLargestVehiclePilot(dispatch);
        }
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, questions } = value;
                    const pressedClass = questions.length ? "btn-pressed" : "";
                    return (
                        <button
                            className={`btn-amazing ${pressedClass}`}
                            onClick={this.onAmazingClick.bind(this, dispatch, questions)}>
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