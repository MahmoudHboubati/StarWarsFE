import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';

export class PlanetServiceApi {
    loadLargestVehiclePilot(dispatch) {
        const question = "What planet in Star Wars universe provided largest number of vehicle pilots?";
        axios.get(config.urls.starWars.planet.API_URL_LARGEST_VEHICLE_PILOT)
            .then(res => {
                dispatch({
                    desired: actions.LOAD_LONGEST_OPENING_CRAWL,
                    payload: {
                        ...res.data,
                        question: question,
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
