import React, { useEffect } from 'react';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';
import If from '../../utils/If';

const CreateBookingForm = props => {

    

        return(
            <Form>
                <FormGroup>
                    <Label for="exampleName">Full name: </Label>
                    <Input type="name" name="name" id="exampleName" placeholder="Write your full name here" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">E-mail: </Label>
                    <Input type="email" name="email" id="exampleEmail" placeholder="Write your e-mail here" />
                </FormGroup>
                <FormGroup>
                    <Label for="examplePickUpTime">Please, tell me your pick up time: </Label>
                    <Input type="time" name="pickUpTime" id="examplePickUpTime" placeholder="What time you want us to pick up you on hotel?" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleEmail">Phone Number: </Label>
                    <Input type="phone" name="phone" id="examplePhone" placeholder="Write your phone here" />
                </FormGroup>
                <FormGroup>
                    <Label for="exampleSelect">
                        Select the place to your next trip!
                    </Label>
                    <Input 
                        type="select" 
                        name="select" 
                        id="exampleSelect">
                    </Input>
                </FormGroup>
            <Button variant="secondary">Submit</Button>
            </Form>
        )
}

export default CreateBookingForm