import { connect } from 'react-redux';

import ListBookings from '../pages/ListBookings';


import {
    requestAddBookingAction,
    requestBookingListAction,
    requestEditBookingAction,
    requestRemoveBookingAction
} from '../actions'

import {
    getBookingListSelector,
    getLoadingBookingsSelector
} from '../selectors'

const mapStateToProps = state => ({
    bookingList: getBookingListSelector(state),
    loadingBookings: getLoadingBookingsSelector(state)
})

const mapDispatchToProps = {
    requestAddBookingAction,
    requestBookingListAction,
    requestEditBookingAction,
    requestRemoveBookingAction
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookings)