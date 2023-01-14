import React from 'react';
import './styles/App.css';
/* Importing the Data component from the Data.js file. */
// import Data from './components/Data';
import RentCalculator from './components/Calculation';
import './styles/calculation.css';
import { StyledContainer, StyledDescription, StyledHeader } from './appStyles';

function App() {
  return (
    <StyledContainer>
      <section className='header'>
        <StyledHeader className='title'>kalkulator wynajmu samochodu</StyledHeader>
        <div className='header-text'>
          <StyledDescription>
            Skorzystaj z naszego kalkulatora, aby obliczyć koszty wynajmu
            interesującego ciebie samochodu. Wprowadź dane, aby zobaczyć, ile
            mogą wynosić koszty wynajmu samochodu.
          </StyledDescription>
        </div>
      </section>
      <RentCalculator />
    </StyledContainer>
  );
}

export default App;
