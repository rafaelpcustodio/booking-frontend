import React from 'react';
import App from '../../App';
import Container from '../components/Container';

const BookingList = ({ children }) => {
    return (
        <App>
            <Container>
                { children }
            </Container>
        </App>
    )
}

BookingList.defaultProps = {}

BookingList.protoTypes = {}

export default BookingList