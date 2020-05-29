import { connect } from 'react-redux';

import ListBookings from '../pages/ListBookings';


import {
    requestAddBooking,
    requestBookingList,
    requestEditBooking,
    requestRemoveBooking
} from '../actions'

import {
    getBookingListSelector
} from '../selectors'

const mapStateToProps = state => ({
    bookingList: getBookingListSelector(state)
})

const mapDispatchToProps = {
    requestAddBooking,
    requestBookingList,
    requestEditBooking,
    requestRemoveBooking
}

export default connect(mapStateToProps, mapDispatchToProps)(ListBookings)