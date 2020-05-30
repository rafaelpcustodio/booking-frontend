import { List, Map, Record } from 'immutable';

const store = Record({
    bookingList: List(),
    loadingBookings: true,
    booking: Map({})
})();

export { store }