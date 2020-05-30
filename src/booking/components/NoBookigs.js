import React, { Fragment } from 'react';
import styled from 'styled-components';

const StyledNoBooking = styled.div`
    color: #8A8585;
    font-weight: bold;
    text-align: center;
    margin: auto;
    width: 50%;
    top: 50%;
`


const NoBookings = () => (
    <>
        <StyledNoBooking>Sorry it seems that you don't have any booking. Let's create one?</StyledNoBooking>
    </>
)

export default NoBookings
