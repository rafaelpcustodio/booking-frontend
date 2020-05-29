import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import BookingList from '../containers/BookingList';
import BookingCard from '../components/BookingCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import DeleteModal from '../components/DeleteModal';

import {
    faEdit,
    faTrashAlt
  } from '@fortawesome/free-solid-svg-icons';

  
import convertDateTime from '../../utils/converter';


const StyledEditButton = styled.button`
    border: none;
    background: none;
    float: right;
    margin: 0rem .5rem 0rem .5rem;
    padding: 0;
    transition: transform .5s;
    :hover {
        transform: scale(1.30);
    }
`

const StyledDeleteButton = styled.button`
    border: none;
    background: none;
    float: right;
    margin: 0rem .5rem 0rem .5rem;
    padding: 0;
    transition: transform .5s;
    :hover {
        transform: scale(1.30);
    }
`

const StyledInfo = styled.div`
    display: flex;
`

const StyledText = styled.div`
    font-weight: bold;
    padding: 0rem .5rem .4rem 0rem;
`

const List = props => {

    const {
        bookingList,
        requestAddBooking,
        requestBookingList,
        requestRemoveBooking,
        requestEditBooking
    } = props

    const [deleteModal, updateDeleteModal] = useState(false);
    const [bookingId, updateBookingId] = useState('');

    useEffect(() => {
        requestBookingList()
    }, [])

    const deleteBooking = () => {
        requestRemoveBooking(bookingId)
        updateBookingId('')
        updateDeleteModal(false)
    }

    const editBooking = (e, id) => {
        e.preventDefault()
        requestEditBooking(id)
    }

    const handleClose = () => updateDeleteModal(false);

    const handleShowDeleteMessage = id => {
        updateDeleteModal(true)
        updateBookingId(id)
    }

    const handleAddBook = () => {
        requestAddBooking()
    }

    return(
        <>  
            <DeleteModal 
                deleteBookingAction={() => deleteBooking()} 
                show={deleteModal}
                bookingId={bookingId}
                handleClose={() => handleClose()}
            />
            <BookingList requestAddBooking={handleAddBook} >
            { bookingList && bookingList.map((booking, index) => (
                    <BookingCard key={index}>
                        <StyledDeleteButton onClick={e => handleShowDeleteMessage(booking.id)}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </StyledDeleteButton>
                        <StyledEditButton onClick={e => editBooking(e, booking.id)}>
                            <FontAwesomeIcon icon={faEdit} />
                        </StyledEditButton>
                        <StyledInfo>
                            <StyledText>Name: </StyledText>
                            <div>{booking.passengerName}</div>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledText>Contact number: </StyledText>
                            <div>{booking.passengerContactNumber}</div>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledText>Pick-up time: </StyledText>
                            <div>{convertDateTime(booking.pickupTime)}</div>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledText>Waiting time: </StyledText>
                            <div>{booking.waitingTime}</div>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledText>Passenger number: </StyledText>
                            <div>{booking.noOfPassengers}</div>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledText>Price: </StyledText>
                            <div>{booking.price} USD</div>
                        </StyledInfo>
                        <StyledInfo>
                            <StyledText>Rating: </StyledText>
                            <div>{booking.rating}</div>
                        </StyledInfo>
                    </BookingCard>
            ))}
            </BookingList>
        </>
    )
}

List.defaultProps = {}

List.protoTypes = {}

export default List