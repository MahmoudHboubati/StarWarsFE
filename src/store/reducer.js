import { actions } from './actions';

export const reducer = (state, action) => {
    switch (action.desired) {
        case actions.LOAD_MOST_APPEARED_PERSON:
            state.details.push(action.payload);
            return state;
        case actions.ERASE_QUESTIONS:
            state.details = [];
            return state;
        default: return state;
    }
}
