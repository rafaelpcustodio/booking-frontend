import { createSelector } from 'reselect';
const REDUCER_NAME = 'tripReducers';

const getTripList = state => state.get(REDUCER_NAME).get('tripList').toJS();

const getTripListSelector = createSelector(
    getTripList,
    tripList => tripList
);

export {
    getTripListSelector
}