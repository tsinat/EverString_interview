import { combineReducers } from 'redux';

import repoReducer from './reducer_github';


const rootReducer = combineReducers({
    repo: repoReducer
});

export default rootReducer;
