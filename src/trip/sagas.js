import { getAction } from '../utils/actions';
import { actions } from './constants';
import { all, put, takeLatest } from 'redux-saga/effects';
import { List } from 'immutable';

import {
    getTripListAction
} from './actions';

function* getTripListRequested() {
    try {
        const tripList = [{ name: "Rio", price: "123.45", isSale: false}]
        yield put(getTripListAction(List(tripList)))
    } catch (error) {
        throw Error
    }
}

function* watchGetTripListRequest() {
    yield takeLatest(getAction(actions.TRIP_REQUEST_GET_LIST), getTripListRequested)
}

function* sagas() {
    yield all([
        watchGetTripListRequest()
    ])
}


export { sagas }