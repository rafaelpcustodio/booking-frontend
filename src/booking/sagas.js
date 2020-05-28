import { getAction } from '../utils/actions';
import { actions } from './constants';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { getAllBookingAPI } from './api';

import {
    getBookingList
} from './actions';

function* getBookingListRequested() {
    try {
        const bookingList = yield call(getAllBookingAPI)
        console.log(bookingList)
        yield put(getBookingList(bookingList))
    } catch (error) {
        throw Error
    }
}


function* watchGetBookingistRequest() {
    yield takeLatest(getAction(actions.BOOKING_REQUEST_GET_LIST), getBookingListRequested)
}

function* sagas() {
    yield all([
        watchGetBookingistRequest()
    ])
}


export { sagas }