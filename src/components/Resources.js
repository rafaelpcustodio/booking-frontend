import React from 'react';
import styled from 'styled-components';

const StyledResourcesText = styled.div`
    color: #656565;
    text-align: center;
    font-size: 12px;
    margin: .5rem 0rem .5rem 0rem;
`

const StyledResourcesHeader = styled.div`
    color: #656565;
    text-align:center;
    font-size: 18px;
    font-weight: bold;
`

const Resources = () => {
    return (
        <div>
            <StyledResourcesHeader>Resources & Links</StyledResourcesHeader>
            <StyledResourcesText>create booking</StyledResourcesText>
            <StyledResourcesText>list bookings</StyledResourcesText>
            <StyledResourcesText>find trips</StyledResourcesText>
            <StyledResourcesText>find best prices</StyledResourcesText>
            <StyledResourcesText>contact us</StyledResourcesText>
        </div>
    );
  }

export default Resources;