import React from 'react';
import usercost from '../styles/usercost.css';

const userCosts = () => {
  return (
    <section className='userCost'>
      <h1>Końcowe koszty wypożyczenia samochodu:</h1>
      <div className='rentalDetails'>
        <span className='detailsCost'>łączne koszty (netto): (cena)</span>
        <span className='detailsCost'>łączne koszty (brutto): (cena)</span>
      </div>
      <div className='rentalDetails'>
        <p className='details'>szczegóły:</p>
        <span className='detailsCost'>Cena paliwa: (cena paliwa)</span>
      </div>
      <div className='rentalDetails'>
        <span className='detailsCost'>
          Cena wynajmy samochodu: (cena wymajmu samochodu )
        </span>
      </div>
    </section>
  );
};

export default userCosts;
