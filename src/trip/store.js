import { List, Map, Record } from 'immutable';

const store = Record({
    tripList: List([])
})();

export { store }