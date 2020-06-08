import { actions } from './constants'

import { createAction } from '../utils/actions'

const getTripListAction = createAction(actions.TRIP_GET_LIST)
const requestTripListAction = createAction(actions.TRIP_REQUEST_GET_LIST)

export {
    getTripListAction,
    requestTripListAction
}