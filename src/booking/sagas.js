import { getAction } from '../utils/actions';
import { actions } from './constants';
import { all, call, put, select, takeLatest } from 'redux-saga/effects';
import { List } from 'immutable';

import { getAllBooking, removeBooking, saveBooking } from './api';

import {
    getTripListAction,
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

function* getTripListRequested() {
    try {
        const tripList = [{ name: "Rio", price: "123.45", isSale: false}]
        yield put(getTripListAction(List(tripList)))
    } catch (error) {
        throw Error
    }
}

function* getBookingListRequested() {
    try {
        const bookingList = yield call(getAllBooking)
        yield put(getBookingListAction(List(bookingList)))
        yield put(setLoadingBookingsAction(false))
    } catch (error) {
        throw Error
    }
}

function* removeBookingRequested({ payload }) {
    yield put(removeBookingAction(payload))
    yield call(removeBooking, payload)
}


function* watchGetTripListRequest() {
    yield takeLatest(getAction(actions.BOOKING_REQUEST_GET_TRIP_LIST), getTripListRequested)
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
        watchGetTripListRequest(),
        watchRemoveBookingistRequest()
    ])
}


export { sagas }