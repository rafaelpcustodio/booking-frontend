import { connect } from 'react-redux';

import List from '../pages/List';


import {
    requestBookingList
} from '../actions'

import {
    getBookingListSelector
} from '../selectors'

const mapStateToProps = state => ({
    bookingList: getBookingListSelector(state)
})

const mapDispatchToProps = {
    requestBookingList
}

export default connect(mapStateToProps, mapDispatchToProps)(List)