import React from 'react';
import App from '../../App';
import Container from '../components/Container';

const BookingList = ({ children, requestAddBooking }) => {
    return (
        <App requestAddBooking={requestAddBooking}>
            <Container>
                { children }
            </Container>
        </App>
    )
}

BookingList.defaultProps = {}

BookingList.protoTypes = {}

export default BookingList