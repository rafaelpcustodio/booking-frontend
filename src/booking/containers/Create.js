import { connect } from 'react-redux';

import CreateBooking from '../pages/CreateBooking';

import {
    requestTripListAction
} from '../actions'

import {
    getTripListSelector
} from '../selectors'

const mapStateToProps = state => ({
    tripList: getTripListSelector(state)
})

const mapDispatchToProps = {
    requestTripListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(CreateBooking)