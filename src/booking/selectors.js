import { createSelector } from 'reselect';
const REDUCER_NAME = 'bookingReducers';

const getBookingList = state => state.get(REDUCER_NAME).get('bookingList');

const getBookingListSelector = createSelector(
    getBookingList,
    bookingList => bookingList
);

export {
    getBookingListSelector
}