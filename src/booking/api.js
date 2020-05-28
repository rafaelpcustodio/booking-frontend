import http from '../_config/http';
import { List } from 'immutable';

import { responseWasOK } from '../utils/http';

import Booking from '../categorization/Booking';

const getAllBookingAPI = () => {
    let API_URL = `/api/v1/bookings`
    return http.get(API_URL)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                console.log(data)
                data.forEach(booking => {
                    response = response.push(new Booking(booking))
                })
            }
            return response
        }).catch(error => error)
}

export { getAllBookingAPI }