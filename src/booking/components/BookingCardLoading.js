import React, { Fragment } from 'react'
import styled, { keyframes } from 'styled-components'

const animationLoading = keyframes`
    from {
        background-position: -375px;
    }
    to {
        background-position: 0;
    }
`

const StyledJobTitlesDescriptionLoading = styled.div`
    animation: ${animationLoading} 1s cubic-bezier(0, .5, .7, 1) infinite;
    background: linear-gradient(to right, #dcdcdc, #E8E8E8);
    border: 1px solid #E8E8E8;
    border-radius: 15px;
    display: inline-block;
    height: 15rem;
    margin: .75rem 1.5rem .75rem 1.5rem;
    width: 25rem;
`

const BookingCardLoading = () => (
    <>
     <StyledJobTitlesDescriptionLoading/>
     <StyledJobTitlesDescriptionLoading/>
     <StyledJobTitlesDescriptionLoading/>
     <StyledJobTitlesDescriptionLoading/>
    </>
)

export default BookingCardLoading
