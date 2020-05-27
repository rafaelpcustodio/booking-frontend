import { combineReducers } from 'redux-immutable';

import { reducers as bookingReducers } from '../booking/reducers';
import { connectRouter } from 'connected-react-router';

const reducers = (history) => combineReducers({
    bookingReducers,
    router: connectRouter(history)
})

export { reducers }
