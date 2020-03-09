import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';

class ApiServices {
    loadMostAppearedInSpecies(dispatch) {
        const question = "What species appeared in the most number of StarWars films?";
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

const apiServices = new ApiServices();
export default apiServices;
