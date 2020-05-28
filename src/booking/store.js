import { List, Record } from 'immutable';

const store = Record({
    bookingList: List()
})();

export { store }