import { React } from 'react';
import { useGlobalContext } from '../context';

const DifferenceDate = () => {
  const {
    setDifference,
    difference,
    rentFrom,
    setRentFrom,
    rentTo,
    setRentTo,
  } = useGlobalContext();

  const handleInitialDate = (e) => {
    setRentFrom(e.target.value);
  };

  const handleFinalDate = (e) => {
    setRentTo(e.target.value);
  };

  const handledifferenceDate = (e) => {
    const start = new Date(rentFrom);
    const end = new Date(rentTo);
    const differenceDateMiliseconds = end - start;
    const difference = differenceDateMiliseconds / (1000 * 3600 * 24);

    setDifference(difference);
    e.preventDefault();
    console.log(difference);
  };

  return (
    <div>
      <input
        type='date'
        className='rentFrom'
        value={rentFrom}
        onChange={handleInitialDate}
      />
      <input
        type='date'
        className='rentTo'
        value={rentTo}
        onChange={handleFinalDate}
      />
      <button onClick={handledifferenceDate}>oblicz dni</button>
      <div>Rental Period: {difference} days</div>
    </div>
  );
};

export default DifferenceDate;
