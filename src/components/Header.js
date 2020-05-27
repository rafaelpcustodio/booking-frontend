import React from 'react';
import styled from 'styled-components';
import headerImage from '../assets/images/travel.jpg';
import StyledHeader from './StyledHeader';

const StyledBackGroundImageHeader = styled.div`
    height: 25rem;
    background-image: url(${headerImage});
    background-size: 1400px 600px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center top;
    box-shadow: 5px 5px 5px 4px red;
`

const Header = () => {
    return (
      <>
        <StyledBackGroundImageHeader/>
        <StyledHeader/>
      </>
    );
  }

export default Header;