import React from 'react';
import App from '../App';
import Container from './components/Container';

const MainPage = ({ children, requestAddBooking, handleFindTrips, handleListBooking }) => {
    return (
        <App 
            requestAddBooking={requestAddBooking} 
            handleFindTrips={handleFindTrips} 
            handleListBooking={handleListBooking}>
            <Container>
                { children }
            </Container>
        </App>
    )
}

MainPage.defaultProps = {}

MainPage.protoTypes = {}

export default MainPage