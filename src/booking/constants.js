const CONTEXT_NAME = 'BOOKING'

const actions = {
    BOOKING_ADD: `${CONTEXT_NAME}_ADD`,
    BOOKING_EDIT: `${CONTEXT_NAME}_EDIT`,
    BOOKING_GET_LIST: `${CONTEXT_NAME}_GET_LIST`,
    BOOKING_GET_TRIP_LIST: `${CONTEXT_NAME}_GET_TRIP_LIST`,
    BOOKING_REMOVE: `${CONTEXT_NAME}_REMOVE`,
    BOOKING_REQUEST_ADD: `${CONTEXT_NAME}_REQUEST_ADD`,
    BOOKING_REQUEST_EDIT: `${CONTEXT_NAME}_REQUEST_EDIT`,
    BOOKING_REQUEST_GET_LIST: `${CONTEXT_NAME}_REQUEST_GET_LIST`,
    BOOKING_REQUEST_GET_TRIP_LIST: `${CONTEXT_NAME}_REQUEST_GET_TRIP_LIST`,
    BOOKING_REQUEST_REMOVE: `${CONTEXT_NAME}_REQUEST_REMOVE`,
    BOOKING_REQUEST_SET_LOADING: `${CONTEXT_NAME}_REQUEST_SET_LOADING`,
    BOOKING_SET_LOADING: `${CONTEXT_NAME}_SET_LOADING`
}
export { actions }