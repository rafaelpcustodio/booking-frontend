import { actions } from './constants'

import { createAction } from '../utils/actions'

const getBookingList = createAction(actions.BOOKING_GET_LIST)
const requestBookingList = createAction(actions.BOOKING_REQUEST_GET_LIST)

export {
    getBookingList,
    requestBookingList
}