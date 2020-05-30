import React from 'react';
import { useHistory } from "react-router-dom";
import styled, { keyframes } from 'styled-components';
import PropTypes from 'prop-types';
import CreateBookingForm from '../components/CreateBookingForm';

import Trip from '../../categorization/Trip';

import MainPage from '../MainPage';

const animationAppearing = keyframes`
    from {
        opacity: 0;
    }
    to {
        opacity: 1;
    }
`

const StyledForm = styled.div`
    animation: ${animationAppearing} 1s;
`

const CreateBooking = props => {

    const {
        requestTripListAction,
        tripList
    } = props

    const history = useHistory();

    const handleListBooking = () => {
        history.push("/")
    }
    
    return(
        <MainPage handleListBooking={handleListBooking}>
            <StyledForm>
                <CreateBookingForm 
                requestTripListAction={requestTripListAction} tripList={tripList}/>
            </StyledForm>
        </MainPage>
    )
}

CreateBooking.defaultProps = {
    requestBookingListAction: null,
    requestTripListAction: null,
    tripList: []
}

CreateBooking.protoTypes = {
    requestBookingListAction: PropTypes.func.isRequired,
    requestTripListAction: PropTypes.func.isRequired,
    tripList: PropTypes.arrayOf(Trip)
}

export default CreateBooking