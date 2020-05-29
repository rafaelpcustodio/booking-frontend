import React from 'react';
import styled from 'styled-components';
import { Button, Modal } from 'react-bootstrap';

const StyledDeleteBox = styled.div`
    height: 40rem;
    width: 40rem;
    background-color: white;
`

const DeleteModal = ( {bookingId, deleteBookingAction, handleClose, show, text} ) => {
    return (
        <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Delete Booking</Modal.Title>
        </Modal.Header>
        <Modal.Body>Are you sure you want to delete this booking?</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e, bookingId) => deleteBookingAction(e, bookingId)}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    );
}

export default DeleteModal