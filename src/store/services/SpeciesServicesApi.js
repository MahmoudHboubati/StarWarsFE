import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';
import constants from './constants';

class SpeciesServicesApi {
    loadMostAppearedInSpecies(dispatch) {
        dispatch({ desired: actions.ADD_LOADING_A_QUESTION });
        axios.get(config.urls.starWars.species.API_URL_MOST_APPEARED_IN_SPECIES)
            .then(res => {
                dispatch({
                    desired: actions.MOST_APPEARED_IN_SPECIES_LOADED,
                    payload: {
                        question: constants.questions.MOST_APPEARED_IN_SPECIES,
                        answer: this.resolver(res.data)
                    }
                });
            });
    }

    resolver(data) {
        return data.map(a => `${a.name} (${a.count})`);
    }
}

const speciesServicesApi = new SpeciesServicesApi();
export default speciesServicesApi;
