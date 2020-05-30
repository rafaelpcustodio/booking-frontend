import { actions } from './constants'

import { createAction } from '../utils/actions'

const addBookingAction = createAction(actions.BOOKING_ADD)
const editBookingAction = createAction(actions.BOOKING_EDIT)
const getBookingListAction = createAction(actions.BOOKING_GET_LIST)
const getTripListAction = createAction(actions.BOOKING_GET_TRIP_LIST)
const removeBookingAction = createAction(actions.BOOKING_REMOVE)
const requestAddBookingAction = createAction(actions.BOOKING_REQUEST_ADD)
const requestBookingListAction = createAction(actions.BOOKING_REQUEST_GET_LIST)
const requestEditBookingAction = createAction(actions.BOOKING_REQUEST_EDIT)
const requestRemoveBookingAction = createAction(actions.BOOKING_REQUEST_REMOVE)
const requestSetLoadingBookingAction = createAction(actions.BOOKING_REQUEST_SET_LOADING)
const requestTripListAction = createAction(actions.BOOKING_REQUEST_GET_TRIP_LIST)
const setLoadingBookingsAction = createAction(actions.BOOKING_SET_LOADING)

export {
    addBookingAction,
    editBookingAction,
    getBookingListAction,
    getTripListAction,
    removeBookingAction,
    requestAddBookingAction,
    requestEditBookingAction,
    requestBookingListAction,
    requestRemoveBookingAction,
    requestSetLoadingBookingAction,
    requestTripListAction,
    setLoadingBookingsAction
}