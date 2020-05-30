import List from './containers/List';
import Create from './containers/Create';

const routes = [
    { component: List, name: 'bookingList', path: '/' },
    { component: Create, name: 'createBooking', path: '/booking/create' }
]

export { routes }