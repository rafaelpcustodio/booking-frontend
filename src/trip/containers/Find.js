import { connect } from 'react-redux';

import FindTrips from '../pages/FindTrips';

import {
    requestTripListAction
} from '../../booking/actions'

import {
    getTripListSelector
} from '../../booking/selectors'

const mapStateToProps = state => ({
    tripList: getTripListSelector(state)
})

const mapDispatchToProps = {
    requestTripListAction
}

export default connect(mapStateToProps, mapDispatchToProps)(FindTrips)