import { connect } from 'react-redux';

import CreateBooking from '../pages/CreateBooking';


import {
    requestAddBooking,
    requestBookingList
} from '../actions'

import {
    getBookingListSelector
} from '../selectors'

const mapStateToProps = state => ({
    bookingList: getBookingListSelector(state)
})

const mapDispatchToProps = {
    requestAddBooking,
    requestBookingList
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBooking)