import http from '../_config/http';
import { List } from 'immutable';

import { responseWasOK } from '../utils/http';

import Trip from '../categorization/Trip';


const getAllTrips = () => {
    let API_URL = `/api/v1/trips`
    return http.get(API_URL)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                data.forEach(trip => {
                    response = response.push(new Trip(trip))
                })
            }
            return response
        }).catch(error => error)
}

export { getAllTrips }