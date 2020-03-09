import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';
import constants from './constants';

class SpeciesServicesApi {
    loadMostAppearedInSpecies(dispatch) {
        const question = constants.questions.MOST_APPEARED_IN_SPECIES;
        axios.get(config.urls.starWars.species.API_URL_MOST_APPEARED_IN_SPECIES)
            .then(res => {
                dispatch({
                    desired: actions.LOAD_MOST_APPEARED_IN_SPECIES,
                    payload: { ...res.data, question: question, answer: this.resolver(res.data) }
                });
            });
    };

    resolver(data) {
        return data.map(a => `${a.name} (${a.count})`);
    }
}

const speciesServicesApi = new SpeciesServicesApi();
export default speciesServicesApi;
