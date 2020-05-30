import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import StyledHeader from './StyledHeader';
import venezaImage from '../assets/images/venezaSize.jpg';
import images from '../utils/images';

const StyledBackGroundImageHeader = styled.div`
    height: 20rem;
    background-image: ${({ image }) => image ? `url('${image}')` : ''};
    background-size: 1400px 700px;
    background-repeat: no-repeat;
    background-attachment: fixed;
    background-position: center bottom 2rem;
    box-shadow: 5px 0px 0px 3px #E8E8E8;
    transition: background-image .9s linear;
`

const BackgroundImageHeader = () => {

    const [image, updateImage] = useState(venezaImage);
    const [position, updatePosition] = useState(1);

    useEffect(() => {
        const interval = setInterval(() => {
            if(position >= images.length) {
                return updatePosition(0)
            }
            updatePosition(position + 1)
            updateImage(images[position])
        }, 10000)
        return () => clearInterval(interval);
    }, [position, images])

    return (
        <StyledBackGroundImageHeader image={image} />
    );
  }

export default BackgroundImageHeader;