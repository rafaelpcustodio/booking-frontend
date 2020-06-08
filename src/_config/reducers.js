import { combineReducers } from 'redux-immutable';

import { reducers as bookingReducers } from '../booking/reducers';
import { reducers as tripReducers } from '../trip/reducers';
import { connectRouter } from 'connected-react-router';

const reducers = (history) => combineReducers({
    bookingReducers,
    tripReducers,
    router: connectRouter(history)
})

export { reducers }
