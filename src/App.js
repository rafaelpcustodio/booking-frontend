import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ children, requestAddBooking }) => {
  return (
    <>
      <Header requestAddBooking={requestAddBooking}/>
        { children }
      <Footer/>
    </>
  );
}

export default App;
