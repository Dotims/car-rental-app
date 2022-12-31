import React from 'react';
import './styles/App.css';
/* Importing the Data component from the Data.js file. */
// import Data from './components/Data';
import RentCalculator from './components/Calculation';
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
        <RentCalculator />
      </section>
    </section>
  );
}

export default App;
