import { connect } from 'react-redux';

import List from '../pages/List';


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
    requestBookingList,
    requestEditBooking,
    requestRemoveBooking
}

export default connect(mapStateToProps, mapDispatchToProps)(List)