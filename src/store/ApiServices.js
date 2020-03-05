import axios from 'axios';
import { config } from '../config';
import { actions } from './actions';

class ApiServices {
    loadMostAppearedPerson(dispatch) {
        const question = "What character (person) appeared in most of the Star Wars films?";
        axios.get(config.urls.starWars.people.API_URL_MOST_APPEARED_PERSON)
            .then(res => dispatch({
                desired: actions.LOAD_MOST_APPEARED_PERSON,
                payload: { ...res.data, question: question, answer: res.data.name }
            }));
    }
}

const apiServices = new ApiServices();
export default apiServices;