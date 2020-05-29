import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useHistory } from "react-router-dom";

import MainPage from '../MainPage';

const CreateBooking = props => {

    const history = useHistory();

    const handleListBooking = () => {
        history.push("/")
    }

    return(
        <MainPage handleListBooking={handleListBooking}>
            <div>create</div>
        </MainPage>
    )
}

CreateBooking.defaultProps = {}

CreateBooking.protoTypes = {}

export default CreateBooking