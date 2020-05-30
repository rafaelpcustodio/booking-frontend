import { handleActions } from 'redux-actions';
import { List } from 'immutable';

import { store } from './store';

import {
    getBookingListAction,
    getTripListAction,
    editBookingAction,
    removeBookingAction,
    setLoadingBookingsAction
} from './actions';

const reducers = handleActions({
    [editBookingAction]: (state, { payload }) => state.merge({
        booking: payload
    }),
    [getBookingListAction]:(state, { payload }) => state.merge({
        bookingList: payload
    }),
    [getTripListAction]:(state, { payload }) => state.merge({
        tripList: payload
    }),
    [setLoadingBookingsAction]: (state, { payload }) => state.merge({
        loadingBookings: payload
    }),
    [removeBookingAction]: (state, {payload}) => {
        const bookings = state.get('bookingList').toJS()
        const bookingIndex = bookings.findIndex(i => i.id === payload)
        if (bookingIndex >= 0) {
            bookings.splice(bookingIndex, 1)
            return state.set('bookingList', List(bookings))
        }
        return state
    }
}, store);

export { reducers }