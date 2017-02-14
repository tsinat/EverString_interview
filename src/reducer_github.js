
export const FETCH_REPO = 'FETCH_REPO';

export default function(state = [], action) {
    switch(action.type) {
        case FETCH_REPO:
            return { ...state, repos: action.payload.data };
        default:
            return state;
    }
}
