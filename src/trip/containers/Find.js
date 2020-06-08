import { connect } from 'react-redux';

import FindTrips from '../pages/FindTrips';

import {
    requestTripListAction
} from '../../trip/actions'

import {
    getTripListSelector
} from '../../trip/selectors'

const mapStateToProps = state => ({
    tripList: getTripListSelector(state)
})

const mapDispatchToProps = {
    requestTripListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTrips)