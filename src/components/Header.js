import React from 'react';
import StyledHeader from './StyledHeader';
import BackgroundImageHeader from './BackgroundImageHeader';

const Header = ({ requestAddBooking, handleFindTrips, handleListBooking }) => {
    return (
      <>
        <BackgroundImageHeader/>
        <StyledHeader 
          requestAddBooking={requestAddBooking}
          handleFindTrips={handleFindTrips}
          handleListBooking={handleListBooking}
        />
      </>
    );
  }

export default Header;