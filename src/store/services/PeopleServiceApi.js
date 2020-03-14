import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';
import constants from './constants';

class PeopleServicesApi {
    loadMostAppearedPerson(dispatch) {
        dispatch({ desired: actions.ADD_LOADING_A_QUESTION });
        axios.get(config.urls.starWars.people.API_URL_MOST_APPEARED_PERSON)
            .then(res => dispatch({
                desired: actions.MOST_APPEARED_PERSON_LOADED,
                payload: {
                    question: constants.questions.MOST_APPEARED_PERSON,
                    answer: [res.data.name]
                }
            }));
    }
}

const peopleServiceApi = new PeopleServicesApi();
export default peopleServiceApi;
