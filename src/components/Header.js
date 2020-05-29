import React from 'react';
import styled from 'styled-components';
import headerImage from '../assets/images/travel.jpg';
import StyledHeader from './StyledHeader';

const StyledBackGroundImageHeader = styled.div`
    height: 20rem;
    background-image: url(${headerImage});
    background-size: 1400px 600px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    box-shadow: 5px 0px 0px 3px #E8E8E8;
`

const Header = ({ requestAddBooking }) => {
    return (
      <>
        <StyledBackGroundImageHeader/>
        <StyledHeader requestAddBooking={requestAddBooking}/>
      </>
    );
  }

export default Header;