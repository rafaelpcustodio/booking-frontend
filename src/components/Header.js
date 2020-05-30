import React from 'react';
import StyledHeader from './StyledHeader';
import BackgroundImageHeader from './BackgroundImageHeader';

const Header = ({ requestAddBooking, handleListBooking }) => {
    return (
      <>
        <BackgroundImageHeader/>
        <StyledHeader 
          requestAddBooking={requestAddBooking} 
          handleListBooking={handleListBooking}
        />
      </>
    );
  }

export default Header;