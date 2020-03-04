import { actions } from './actions';

export const reducer = (state, action) => {
    switch (action.desired) {
        case actions.LOAD_MOST_APPEARED_PERSON:
            state.details.push(action.payload);
            return {
                ...state
            };
        default: return state;
    }
}
