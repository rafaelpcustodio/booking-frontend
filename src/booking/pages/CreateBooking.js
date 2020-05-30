import React, { useState, useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import { useHistory } from "react-router-dom";

import MainPage from '../MainPage';

const CreateBooking = props => {

    const history = useHistory();

    const handleListBooking = () => {
        history.push("/")
    }

    return(
        <MainPage handleListBooking={handleListBooking}>
            <Form>
                <FormGroup>
                    <Label for="exampleName">Full name</Label>
                    <Input type="name" name="name" id="exampleName" placeholder="Write your full name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Email</Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Write your e-mail here" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">Select the place to your next trip!</Label>
                    <Input type="select" name="select" id="exampleSelect">
                    <option>Rio de janeiro</option>
                    <option>Bangkok</option>
                    <option>Syndey</option>
                    <option>Paris</option>
                    <option>Veneza</option>
                    </Input>
                </FormGroup>
                <FormGroup>
                    <Label for="exampleText">Text Area</Label>
                    <Input type="textarea" name="text" id="exampleText" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleFile">File</Label>
                    <Input type="file" name="file" id="exampleFile" />
                    <FormText color="muted">
                    This is some placeholder block-level help text for the above input.
                    It's a bit lighter and easily wraps to a new line.
                    </FormText>
                </FormGroup>
                <Button>Submit</Button>
            </Form>
        </MainPage>
    )
}

CreateBooking.defaultProps = {}

CreateBooking.protoTypes = {}

export default CreateBooking