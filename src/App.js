import React from 'react';
import MainContainer from '../src/components/MainContainer';
import Header from './components/Header'

const App = ({ children }) => {
  return (
    <>
      <Header/>
      <MainContainer>
          { children }
      </MainContainer>
    </>
  );
}

export default App;
