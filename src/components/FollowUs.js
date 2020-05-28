import React from 'react';
import styled from 'styled-components';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import {
    faFacebook,
    faTwitter,
    faInstagram,
    faYoutube
  } from '@fortawesome/free-brands-svg-icons';

const StyledFollowUsIcons = styled.div`
  margin: 0rem .5rem 0rem .5rem;
`

const StyledIcons = styled.div`
  display: flex;
  margin: 1.2rem 0rem 0rem 0rem;
`

const StyledFollowUsHeader = styled.div`
    color: #656565;
    text-align:center;
    font-size: 18px;
    font-weight: bold;
`

const FollowUs = () => {
    return (
        <div>
            <StyledFollowUsHeader>Follow us:</StyledFollowUsHeader>
            <StyledIcons>
                <StyledFollowUsIcons>
                    <FontAwesomeIcon icon={faFacebook} size="3x"/>
                </StyledFollowUsIcons>
                <StyledFollowUsIcons>
                    <FontAwesomeIcon icon={faTwitter} size="3x"/>
                </StyledFollowUsIcons>
                <StyledFollowUsIcons>
                    <FontAwesomeIcon icon={faInstagram} size="3x"/>
                </StyledFollowUsIcons>
                <StyledFollowUsIcons>
                    <FontAwesomeIcon icon={faYoutube} size="3x"/>
                </StyledFollowUsIcons>
            </StyledIcons>
        </div>
    );
  }

export default FollowUs;