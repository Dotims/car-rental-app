import React from 'react';
import './styles/App.css';
/* Importing the Data component from the Data.js file. */
// import Data from './components/Data';
import UserConst from './components/userCosts';
import Calculations from './components/calculations';
import RentCalculator from './components/calculationx';
import './styles/calculation.css';

function App() {
  return (
    <section className='app'>
      <section className='wrapper'>
        <article className='header'>
          <h1 className='title'>kalkulator wynajmu samochodu</h1>
          <div className='header-text'>
            <p className='header-text'>
              skorzystaj z naszego kalkulatora, aby obliczyć koszty wynajmu
              interesującego ciebie samochodu. Wprowadź dane, aby zobaczyć, ile
              mogą wynosić koszty wynajmu samochodu.
            </p>
          </div>
        </article>
        {/* <Data />
        <UserConst /> */}
        <RentCalculator />
      </section>
    </section>
  );
}

export default App;
