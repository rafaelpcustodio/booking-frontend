import { List, Map, Record } from 'immutable';

const store = Record({
    bookingList: List(),
    booking: Map()
})();

export { store }