import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';
import constants from './constants';

export class PlanetServiceApi {
    loadLargestVehiclePilot(dispatch) {
        dispatch({ desired: actions.ADD_LOADING_A_QUESTION });
        axios.get(config.urls.starWars.planet.API_URL_LARGEST_VEHICLE_PILOT)
            .then(res => {
                dispatch({
                    desired: actions.LARGEST_VEHICLE_PILOT_LOADED,
                    payload: {
                        question: constants.questions.LARGEST_VEHICLE_PILOT,
                        answer: this.resolver(res.data)
                    }
                });
            });
    }

    resolver(data) {
        return data
            .sort((a, b) => b.count - a.count)
            .filter((a, i) => i === 0)
            .map(a => `Planet: ${a.planetName} - Pilots: (${a.count}) ${a.pilots}`);
    }
}

const planetServicesApi = new PlanetServiceApi();
export default planetServicesApi;
