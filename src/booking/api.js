import http from '../_config/http';
import { List } from 'immutable';

import { handleSuccess, responseWasOK } from '../utils/http';

import Booking from '../categorization/Booking';

const getAllBooking = () => {
    let API_URL = `/api/v1/bookings`
    return http.get(API_URL)
        .then(({ data, status }) => {
            let response = List()
            if (responseWasOK(status)) {
                data.forEach(booking => {
                    response = response.push(new Booking(booking))
                })
            }
            return response
        }).catch(error => error)
}

const removeBooking = ( bookingId ) => {
    let API_URL = '/api/v1/bookings/' + bookingId
    return http.delete(API_URL)
        .then(handleSuccess)
        .catch(error => error)
}

const addBooking = ({ booking }) => {
    let API_URL = '/api/v1/bookings'
    return http.post(API_URL,
        JSON.stringify({
            requestBookingDTO: booking
        })
    ).then(handleSuccess).catch(error => error)
}

const editBooking = ({ booking }) => {
    const { id } = booking
    let API_URL = '/api/v1/bookings/' + id
    return http.put(API_URL,
        JSON.stringify({
            requestBookingDTO: booking
        })
    ).then(handleSuccess).catch(error => error)
}

export { addBooking, getAllBooking, removeBooking }