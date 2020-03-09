import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';
import constants from './constants';

export class FilmServiceApi {
    loadLongestOpeningCrawl(dispatch) {
        const question = constants.questions.LONGEST_OPENING_CRAWL;
        dispatch({ desired: actions.ADD_LOADING_A_QUESTION });
        axios.get(config.urls.starWars.film.API_URL_LONGEST_OPENING_CRAWL)
            .then(res => {
                dispatch({
                    desired: actions.LONGEST_OPENING_CRAWL_LOADED,
                    payload: {
                        question: question,
                        answer: this.resolver(res)
                    }
                });
            });
    }

    resolver(res) {
        return [res.data.filmTitle];
    }
}

const filmServicesApi = new FilmServiceApi();
export default filmServicesApi;
