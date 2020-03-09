import { actions } from './actions';

export const reducer = (state, action) => {
    switch (action.desired) {
        case actions.MOST_APPEARED_PERSON_LOADED:
        case actions.MOST_APPEARED_IN_SPECIES_LOADED:
        case actions.LONGEST_OPENING_CRAWL_LOADED:
        case actions.LARGEST_VEHICLE_PILOT_LOADED:
            state.questions.push(action.payload);
            state.loading--;
            return state;
        case actions.ERASE_QUESTIONS:
            state.questions = [];
            state.loading = 0;
            return state;
        case actions.ADD_LOADING_A_QUESTION:
            console.log(state.loading)
            state.loading++;
            return state;
        default: return state;
    }
}
