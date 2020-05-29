import List from './containers/List';
import CreateBooking from './pages/CreateBooking';

const routes = [
    { component: List, name: 'bookingList', path: '/' },
    { component: CreateBooking, name: 'bookingList', path: '/booking/create' }
]

export { routes }