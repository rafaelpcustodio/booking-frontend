import React from 'react';
import styled from 'styled-components';
import logo from '../assets/images/logo.png';
import StyledHeader from './StyledHeader';

const StyledAdressComponent = styled.div`
    color: #656565;
    margin: 1.6rem 0rem 0rem 0rem;
    display: inline-block;
`

const StyledAddress = styled.div`
    margin: .3rem 0rem 0rem 0rem;
`

const StyledMainLogo = styled.div`
    color: #656565;
    text-align:center;
    font-size: 18px;
    font-weight: bold;
`

const StyledImage = styled.div`
    text-align:center;
    width: auto;
`

const Styled = styled.div`
    display: flex;
`

const MainLogo = () => {
    return (
        <Styled>
            <StyledMainLogo>
                <div>Travel across</div>
                <StyledImage>
                    <img src={logo} width="130" height="80"/>
                </StyledImage>
            </StyledMainLogo>
            <StyledAdressComponent>
                <StyledAddress>Exhibition Street, 255</StyledAddress>
                <StyledAddress>Waltman, Arizona 00786</StyledAddress>
                <StyledAddress>+55 774 014875</StyledAddress>
            </StyledAdressComponent>
        </Styled>
    );
  }

export default MainLogo;