import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Styled = styled.div`
    background-color: white;
    border-top: 1px solid #E8E8E8;
    border-bottom: 2px solid #E8E8E8;
    display: flex;
    height: 4rem;
    justify-content: center;
    width: 100%;
`

const StyledHeader = ({requestAddBooking, handleFindTrips, handleListBooking}) => {
    return (
      <Styled>
            <Button text={"Create bookings"} action={requestAddBooking}/>
            <Button text={"List bookings"} action={handleListBooking}/>
            <Button text={"Find trips"} action={handleFindTrips}/>
            <Button text={"Find best prices"}/>
            <Button text={"Contact us"}/>
      </Styled>
    );
  }

export default StyledHeader;