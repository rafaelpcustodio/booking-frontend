import { all } from 'redux-saga/effects';

import { sagas as bookingSagas } from '../booking/sagas';

function* sagas() {
    yield all([
        bookingSagas()
    ]);
}

export { sagas }