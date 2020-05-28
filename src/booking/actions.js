import { actions } from './constants'

import { createAction } from '../utils/actions'

const addBookingAction = createAction(actions.BOOKING_ADD)
const requestAddBooking = createAction(actions.BOOKING_REQUEST_ADD)
const editBookingAction = createAction(actions.BOOKING_EDIT)
const requestEditBooking = createAction(actions.BOOKING_REQUEST_EDIT)
const getBookingListAction = createAction(actions.BOOKING_GET_LIST)
const requestBookingList = createAction(actions.BOOKING_REQUEST_GET_LIST)
const removeBookingAction = createAction(actions.BOOKING_REMOVE)
const requestRemoveBooking = createAction(actions.BOOKING_REQUEST_REMOVE)

export {
    addBookingAction,
    requestAddBooking,
    getBookingListAction,
    requestBookingList,
    removeBookingAction,
    requestRemoveBooking,
    editBookingAction,
    requestEditBooking
}