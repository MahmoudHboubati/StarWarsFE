import { actions } from './actions';

export const reducer = (state, action) => {
    switch (action.desired) {
        case actions.LOAD_MOST_APPEARED_PERSON:
        case actions.LOAD_MOST_APPEARED_IN_SPECIES:
        case actions.LOAD_LONGEST_OPENING_CRAWL:
        case actions.LOAD_LARGEST_VEHICLE_PILOT:
            state.questions.push(action.payload);
            return state;
        case actions.ERASE_QUESTIONS:
            state.questions = [];
            return state;
        default: return state;
    }
}
