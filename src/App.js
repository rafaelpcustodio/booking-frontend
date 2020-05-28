import React from 'react';
import MainContainer from '../src/components/MainContainer';
import Header from './components/Header';
import Footer from './components/Footer';

const App = ({ children }) => {
  return (
    <>
      <Header/>
      <MainContainer>
          { children }
      </MainContainer>
      <Footer/>
    </>
  );
}

export default App;
