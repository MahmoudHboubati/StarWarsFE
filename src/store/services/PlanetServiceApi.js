import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';

export class PlanetServiceApi {
    loadLargestVehiclePilot(dispatch) {
        const question = "What planet in Star Wars universe provided largest number of vehicle pilots?";
        axios.get(config.urls.starWars.planet.API_URL_LARGEST_VEHICLE_PILOT)
            .then(res => {
                let maxPilotCount = Math.max.apply(Math, res.data.map(a => a.count));
                let answer = {
                    items: res.data.filter(a => a.count === maxPilotCount),
                    resolver: this.resolver
                };
                dispatch({
                    desired: actions.LOAD_LONGEST_OPENING_CRAWL,
                    payload: {
                        ...res.data,
                        question: question,
                        answer: answer
                    }
                });
            });
    }
    resolver(answerItem) {
        return `Planet: ${answerItem.planetName} - Pilots: (${answerItem.count}) ${answerItem.pilots}`;
    }
}

const planetServicesApi = new PlanetServiceApi();
export default planetServicesApi;
