const PROD_BASE_API_URL = 'https://starwarsdoorodont.herokuapp.com/api';
const DEV_BASE_API_URL = 'http://localhost:5000/api';

const prod = {
    urls: {
        starWars:
        {
            people: { API_URL_MOST_APPEARED_PERSON: PROD_BASE_API_URL + '/people/getMostAppeared' },
            species: { API_URL_MOST_APPEARED_IN_SPECIES: PROD_BASE_API_URL + '/species/getMostAppeared' }
        }
    }
}

const dev = {
    urls: {
        starWars:
        {
            people: { API_URL_MOST_APPEARED_PERSON: DEV_BASE_API_URL + '/people/getMostAppeared' },
            species: { API_URL_MOST_APPEARED_IN_SPECIES: DEV_BASE_API_URL + '/species/getMostAppeared' }
        }
    }
};

export const config = process.env.NODE_ENV === 'development' ? dev : prod;