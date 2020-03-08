import axios from 'axios';
import { config } from '../../config';
import { actions } from '../actions';

export class FilmServiceApi {
    loadLongestOpeningCrawl(dispatch) {
        const question = "Which of all Star Wars movies has the longest opening crawl?";
        axios.get(config.urls.starWars.film.API_URL_LONGEST_OPENING_CRAWL)
            .then(res => {
                let answer = [{ name: res.data.filmTitle, count: res.data.count }];
                dispatch({
                    desired: actions.LOAD_LONGEST_OPENING_CRAWL,
                    payload: { ...res.data, question: question, answer: answer }
                });
            });
    }
}

const filmServicesApi = new FilmServiceApi();
export default filmServicesApi;
