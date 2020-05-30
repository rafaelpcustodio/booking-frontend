import { connect } from 'react-redux';

import ListBookings from '../pages/ListBookings';


import {
    requestAddBooking,
    requestBookingList,
    requestEditBooking,
    requestRemoveBooking
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
    requestAddBooking,
    requestBookingList,
    requestEditBooking,
    requestRemoveBooking
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookings)