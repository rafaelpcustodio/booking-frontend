import React from 'react';
import styled from 'styled-components';

import MainLogo from './MainLogo';
import FollowUs from './FollowUs';
import Resources from './Resources';

const StyledFooter = styled.div`
    background-color: #F7F7F7;
    border-top: 1.5px solid #B1B1B1;
    display: flex;
    height: 10rem;
    justify-content: space-around;
    padding: 1rem 0rem 0rem 0rem;
    box-shadow: 5px 5px 5px 15px #E8E8E8;
`

const Footer = () => {
    return (
        <StyledFooter>
            <MainLogo/>
            <FollowUs/>
            <Resources/>
        </StyledFooter>
    );
  }

export default Footer;