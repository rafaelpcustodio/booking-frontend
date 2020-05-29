import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ children, requestAddBooking, handleListBooking }) => {
  return (
    <>
      <Header requestAddBooking={requestAddBooking} handleListBooking={handleListBooking}/>
        { children }
      <Footer/>
    </>
  );
}

export default App;
