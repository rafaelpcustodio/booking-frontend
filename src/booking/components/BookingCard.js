import styled from 'styled-components';

const BookingCard = styled.div`
    border: 1px solid #E8E8E8;
    border-radius: 15px;
    box-shadow: 5px 5px 5px 4px #E8E8E8;
    display: inline-block;
    margin: .75rem 1.5rem .75rem 1.5rem;
    padding: 1rem 1rem 1rem 1rem;
    transition: transform .5s;
    width: 25rem;
    :hover {
        transform: scale(1.05);
    }
`

export default BookingCard