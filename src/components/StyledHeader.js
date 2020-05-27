import React from 'react';
import styled from 'styled-components';
import Button from './Button';

const Styled = styled.div`
    background-color: white;
    border-top: 1px solid #E8E8E8;
    border-bottom: 2px solid #E8E8E8;
    box-shadow: 3px 3px 3px 4px gray;
    display: flex;
    height: 4rem;
    justify-content: center;
    width: 100%;
`

const StyledHeader = () => {
    return (
      <Styled>
            <Button text={"Create bookings"}/>
            <Button text={"List bookings"}/>
            <Button text={"Find trips"}/>
            <Button text={"Find best prices"}/>
            <Button text={"Contact us"}/>
      </Styled>
    );
  }

export default StyledHeader;