import { React, useState } from 'react';
import { useGlobalContext } from '../context';
import DifferenceDate from './DifferenceDate';

const RentCalculator = () => {
  const [carType, setCarType] = useState('Basic');
  const [rentalCost, setRentalCost] = useState();
  const [year, setYear] = useState(1900);
  // const [finallyCost, setFinallyCost] = useState(0);

  const {
    difference,
    rentFrom,
    rentTo,
    setNewDriver,
    setKilometers,
    newDriver,
    kilometers,
  } = useGlobalContext();

  const calculateRentalCost = (e) => {
    e.preventDefault();
    const start = new Date(rentFrom);
    const end = new Date(rentTo);
    const differenceDateMiliseconds = end - start;
    const differenceDays = differenceDateMiliseconds / (1000 * 3600 * 24);

    const rentPerDay = 100;
    let carTypeCost = 0;
    if (carType === 'Basic') {
      carTypeCost = 1;
    } else if (carType === 'Standard') {
      carTypeCost = 1.3;
    } else if (carType === 'Medium') {
      carTypeCost = 1.6;
    } else if (carType === 'Premium') {
      carTypeCost = 2;
    }
    // setRentalCost(carTypeCost);

    const avgFuel = 8;
    const costPerKm = (kilometers / 100) * avgFuel;
    const timeRentCar = rentPerDay * differenceDays;
    console.log('dane', parseInt(timeRentCar));
    // setRentalCost(difference);
    setRentalCost(parseInt(newDriver * timeRentCar * carTypeCost * costPerKm));
  };

  const handleValueLicense = (e) => {
    const currentYear = new Date().getFullYear();
    const ValueLincese = e.target.value;
    setYear(ValueLincese);
    const differenceYear = currentYear - ValueLincese;
    console.log(differenceYear);
    if (differenceYear < 5 && differenceYear > 3) {
      console.log('chlop ma prawo jazdy wiecej niz 3 lata i mniej niz 5');
      setNewDriver(1.2);
    }
    if (differenceYear < 3) {
      console.log('nie mozesz wypozyczyc samochodu');
      setNewDriver(1);
    }
  };

  return (
    <section>
      <form>
        <section className='userData'>
          <DifferenceDate />
          <label>
            <input
              type='number'
              min={1900}
              placeholder='Rok otrzymania prawa jazdy'
              value={year}
              onChange={handleValueLicense}
            />
            <input
              type='number'
              placeholder='ile km'
              min={10}
              step={10}
              onChange={(e) => setKilometers(e.target.value)}
            />
          </label>
          <br />
          <label>
            Car Type:
            <select
              name='carType'
              value={carType}
              onChange={(e) => setCarType(e.target.value)}
            >
              <option value='Basic'>Basic</option>
              <option value='Standard'>Standard</option>
              <option value='Medium'>Medium</option>
              <option value='Premium'>Premium</option>
            </select>
          </label>
          <br />
          <button type='button' onClick={calculateRentalCost}>
            Oblicz wynajem samochodu
          </button>
        </section>
      </form>
      <p>Koszt wynajmu: {rentalCost}zł</p>
    </section>
  );
};

export default RentCalculator;
