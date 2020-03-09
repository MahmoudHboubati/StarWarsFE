import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';
import constants from './constants';

export class FilmServiceApi {
    loadLongestOpeningCrawl(dispatch) {
        const question = constants.questions.LONGEST_OPENING_CRAWL;
        axios.get(config.urls.starWars.film.API_URL_LONGEST_OPENING_CRAWL)
            .then(res => {
                dispatch({
                    desired: actions.LOAD_LONGEST_OPENING_CRAWL,
                    payload: { ...res.data, question: question, answer: this.resolver(res) }
                });
            });
    }

    resolver(res) {
        return [res.data.filmTitle];
    }
}

const filmServicesApi = new FilmServiceApi();
export default filmServicesApi;
