import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";
import PropTypes from 'prop-types';
import MainPage from '../../booking/MainPage';
import Trip from '../../categorization/Trip';

const FindTrips = props => {

    const {
        requestTripListAction,
        tripList
    } = props

    const history = useHistory();

    useEffect(() => {
        requestTripListAction()
    }, []);

    const handleListBooking = () => {
        history.push("/")
    }

    const handleAddBook = () => {
        history.push("/booking/create");
    }
    console.log("hello")
    return(
        <MainPage 
        handleListBooking={handleListBooking} 
        requestAddBooking={handleAddBook}>
                <div>Hi</div>
        </MainPage>
    )
}

FindTrips.defaultProps = {
    tripList: [],
    requestTripListAction: null
}

FindTrips.protoTypes = {
    tripList: PropTypes.arrayOf(Trip),
    requestTripListAction: PropTypes.func
}

export default FindTrips