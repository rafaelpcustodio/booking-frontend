import { times } from '../constants/times';

import axios from 'axios';

const API_URL = 'http://localhost:8080'; // temporary

const http = axios.create({
    baseURL: API_URL,
    config: {
        timeout: times.THIRDY
    },
    headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    },
    timeout: times.THIRDY
})

export default http