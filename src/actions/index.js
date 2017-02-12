import axios from 'axios';

import { FETCH_REPO } from '../reducer_github';

const ROOT_URL =   'https://api.github.com/users'

export function fetchRepos(User) {
    const request = axios.get(`${ROOT_URL}/${User}/repos`);
    return {
        type: FETCH_REPO,
        payload: request
    };
}
