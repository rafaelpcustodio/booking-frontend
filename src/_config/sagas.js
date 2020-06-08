import { all } from 'redux-saga/effects';

import { sagas as bookingSagas } from '../booking/sagas';
import { sagas as tripSagas } from '../trip/sagas';

function* sagas() {
    yield all([
        bookingSagas(),
        tripSagas()
    ]);
}

export { sagas }