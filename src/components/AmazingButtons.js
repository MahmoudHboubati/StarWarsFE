import React, { Component } from 'react'
import starImage from './../resources/star.svg';
import { Consumer } from '../store/context';
import { actions } from '../store/actions';
import filmServiceApi from '../store/services/FilmServiceApi';
import planetServiceApi from '../store/services/PlanetServiceApi';
import peopleServiceApi from '../store/services/PeopleServiceApi';
import speciesServicesApi from '../store/services/SpeciesServicesApi';

class AmazingButtons extends Component {

    onAmazingClick = (dispatch, questions, loading) => {
        if (questions.length)
            dispatch({
                desired: actions.ERASE_QUESTIONS
            });
        else {
            if (!loading) {
                peopleServiceApi.loadMostAppearedPerson(dispatch);
                speciesServicesApi.loadMostAppearedInSpecies(dispatch);
                filmServiceApi.loadLongestOpeningCrawl(dispatch);
                planetServiceApi.loadLargestVehiclePilot(dispatch);
            }
        }
    }

    render() {
        return (
            <Consumer>
                {value => {
                    const { dispatch, questions, loading } = value;
                    const pressedClass = questions.length | loading ? "btn-pressed" : "";
                    return (
                        <button
                            className={`btn-amazing ${pressedClass}`}
                            onClick={this.onAmazingClick.bind(this, dispatch, questions, loading)}
                            onDoubleClick={() => console.log("on double click")}
                                >
                            <img src={starImage} className="star" alt="*" />
                            Do. Or do not. There is no try.
                            <img src={starImage} className="star" alt="*" />
                            <div className="shiny"></div>
                            {loading}
                        </button>
                    );
                }}
            </Consumer>
        );
    }
}

export default AmazingButtons;