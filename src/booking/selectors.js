import { createSelector } from 'reselect';
const REDUCER_NAME = 'bookingReducers';

const getBookingList = state => state.get(REDUCER_NAME).get('bookingList').toJS();
const getLoadingBookings = state => state.get(REDUCER_NAME).get('loadingBookings');

const getTripList = state => state.get(REDUCER_NAME).get('tripList').toJS();

const getBookingListSelector = createSelector(
    getBookingList,
    bookingList => bookingList
);

const getLoadingBookingsSelector = createSelector(
    getLoadingBookings,
    loadingBookings => loadingBookings
);

const getTripListSelector = createSelector(
    getTripList,
    tripList => tripList
);

export {
    getTripListSelector,
    getBookingListSelector,
    getLoadingBookingsSelector
}