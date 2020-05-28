import { handleActions } from 'redux-actions';

import { store } from './store';

import {
    getBookingList
} from './actions';

const reducers = handleActions({
    [getBookingList]:(state, { payload }) => state.merge({
        bookingList: payload
    })
}, store);

export { reducers }