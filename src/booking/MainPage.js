import React from 'react';
import App from '../App';
import Container from './components/Container';

const MainPage = ({ children, requestAddBooking, handleListBooking }) => {
    return (
        <App requestAddBooking={requestAddBooking} handleListBooking={handleListBooking}>
            <Container>
                { children }
            </Container>
        </App>
    )
}

MainPage.defaultProps = {}

MainPage.protoTypes = {}

export default MainPage