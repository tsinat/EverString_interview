
export const FETCH_REPO = 'FETCH_REPO';


export default function(state = [], action) {
    switch(action.type) {
        case FETCH_REPO:
            // console.log('yeah it is working', action.payload.data);
            return { ...state, repos: action.payload.data };
        default:
            return state;
    }
}
