import axios from 'axios';
import { config } from '../config';
import { actions } from './actions';

class ApiServices {
    loadMostAppearedPerson(dispatch) {
        const question = "What character (person) appeared in most of the StarWars films?";
        axios.get(config.urls.starWars.people.API_URL_MOST_APPEARED_PERSON)
            .then(res => dispatch({
                desired: actions.LOAD_MOST_APPEARED_PERSON,
                payload: { ...res.data, question: question, answer: res.data.name }
            }));
    }
    loadMostAppearedInSpecies(dispatch) {
        const question = "What species appeared in the most number of StarWars films?";
        axios.get(config.urls.starWars.species.API_URL_MOST_APPEARED_IN_SPECIES)
            .then(res => {
                console.log(res);
                dispatch({
                    desired: actions.LOAD_MOST_APPEARED_IN_SPECIES,
                    payload: { ...res.data, question: question, answer: res.data }
                });
            });
    }
}

const apiServices = new ApiServices();
export default apiServices;