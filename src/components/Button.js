import React from 'react';
import styled from 'styled-components';

const StyledText = styled.div`
    align-items: center;
    text-align: center;
    color: #8A8585;
`

const StyledButton = styled.button`
    height: 62px;
    width: 200px;
    background-color: white;
    padding: 0;
    border: none;
    background: none;
    border-left: 1px solid #E8E8E8;
    border-right: 1px solid #E8E8E8;
    &:hover {
        background-color: #E8E8E8;
        font-weight: bold;
        color: #818181;
    }
`

const Button = ( {text} ) => {
    return (
        <>
            <StyledButton>
                <StyledText>
                    {text}
                </StyledText>
            </StyledButton>
        </>
    );
}

export default Button;