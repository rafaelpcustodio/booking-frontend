import { handleActions } from 'redux-actions';

import { store } from './store';

import {
    getTripListAction
} from './actions';

const reducers = handleActions({
    [getTripListAction]:(state, { payload }) => state.merge({
        tripList: payload
    })
}, store);

export { reducers }