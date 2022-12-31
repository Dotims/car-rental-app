import { React } from 'react';
import { useGlobalContext } from '../context';
import '../styles/differenceDate.css';

const DifferenceDate = () => {
  const { rentFrom, setRentFrom, rentTo, setRentTo } = useGlobalContext();

  const handleInitialDate = (e) => {
    setRentFrom(e.target.value);
  };

  const handleFinalDate = (e) => {
    setRentTo(e.target.value);
  };

  return (
    <section className='user-rental-date'>
      <div className='date-input'>
        <p>od kiedy chcesz wynająć samochód:</p>
        <input
          type='date'
          className='rentFrom'
          value={rentFrom}
          onChange={handleInitialDate}
        />
      </div>
      <div className='date-input'>
        <p>do kiedy chcesz wynajmować samochód</p>
        <input
          type='date'
          className='rentTo'
          value={rentTo}
          onChange={handleFinalDate}
        />
      </div>
    </section>
  );
};

export default DifferenceDate;
