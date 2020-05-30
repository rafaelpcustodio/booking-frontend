import { getAction } from '../utils/actions';
import { actions } from './constants';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';

import { getAllBooking, removeBooking, saveBooking } from './api';

import {
    getBookingListAction,
    editBookingAction,
    removeBookingAction,
    setLoadingBookingsAction
} from './actions';

function* addBookingRequested() {
    try {
    } catch (error) {
        throw Error
    }
}

function* editBookingRequested({ payload }) {
    try {
        yield put(editBookingAction(payload))
    } catch (error) {
        throw Error
    }
}

function* getBookingListRequested() {
    try {
        const bookingList = yield call(getAllBooking)
        yield put(getBookingListAction(bookingList))
        yield put(setLoadingBookingsAction(false))
    } catch (error) {
        throw Error
    }
}

function* removeBookingRequested({ payload }) {
    yield put(removeBookingAction(payload))
    yield call(removeBooking, payload)
}

function* watchRemoveBookingistRequest() {
    yield takeLatest(getAction(actions.BOOKING_REQUEST_REMOVE), removeBookingRequested)
}

function* watchAddBookingistRequest() {
    yield takeLatest(getAction(actions.BOOKING_REQUEST_ADD), addBookingRequested)
}


function* watchGetBookingListRequest() {
    yield takeLatest(getAction(actions.BOOKING_REQUEST_GET_LIST), getBookingListRequested)
}

function* watchEditBookingistRequest() {
    yield takeLatest(getAction(actions.BOOKING_REQUEST_EDIT), editBookingRequested)
}


function* sagas() {
    yield all([
        watchAddBookingistRequest(),
        watchEditBookingistRequest(),
        watchGetBookingListRequest(),
        watchRemoveBookingistRequest()
    ])
}


export { sagas }