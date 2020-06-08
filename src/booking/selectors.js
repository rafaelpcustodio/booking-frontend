import { createSelector } from 'reselect';
const REDUCER_NAME = 'bookingReducers';

const getBookingList = state => state.get(REDUCER_NAME).get('bookingList').toJS();
const getLoadingBookings = state => state.get(REDUCER_NAME).get('loadingBookings');

const getBookingListSelector = createSelector(
    getBookingList,
    bookingList => bookingList
);

const getLoadingBookingsSelector = createSelector(
    getLoadingBookings,
    loadingBookings => loadingBookings
);

export {
    getBookingListSelector,
    getLoadingBookingsSelector
}