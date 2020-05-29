import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
    align-items: center;
    text-align: center;
    color: #8A8585;
    :hover {    
        color: black;
    }
`

const StyledButton = styled.button`
    text-align:center;
    font-size: 16px;
    font-weight: bold;
    height: 62px;
    width: 200px;
    background-color: white;
    padding: 0;
    border: none;
    background: none;
    border-left: 1px solid #E8E8E8;
    border-right: 1px solid #E8E8E8;
    :focus {
        outline: none;
    }
`

const Button = ( {text, action} ) => {
    return (
        <StyledButton onClick={action}>
            <StyledText>
                {text}
            </StyledText>
        </StyledButton>
    );
}

export default Button;