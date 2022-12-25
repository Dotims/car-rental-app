import { React, useState } from 'react';
import { useGlobalContext } from '../context';
import DifferenceDate from './DifferenceDate';

const RentCalculator = () => {
  const [rentalPeriod, setRentalPeriod] = useState(1);
  const [carType, setCarType] = useState('standard');
  const [rentalCost, setRentalCost] = useState();
  const [finallyCost, setFinallyCost] = useState(0);

  const [valueYearLicense, setValueYearLicense] = useState('');

  const { difference } = useGlobalContext();
  console.log({ difference });

  const handleChange = (event) => {
    const { name, value } = event.target;
    if (name === 'rentalPeriod') {
      setRentalPeriod(value);
    } else if (name === 'carType') {
      setCarType(value);
    }
  };

  const calculateRentalCost = () => {
    let typeCar = 0;
    let rentPerDay = 150;
    if (carType === 'Basic') {
      typeCar = 1 * rentPerDay * rentalPeriod;
    } else if (carType === 'Standard') {
      typeCar = 1.3 * rentPerDay * rentalPeriod;
    } else if (carType === 'Medium') {
      typeCar = 1.6 * rentPerDay * rentalPeriod;
    } else if (carType === 'Premium') {
      typeCar = 2 * rentPerDay * rentalPeriod;
    }
    setRentalCost(typeCar);
  };

  const handleValueLicense = (e) => {
    const currentYear = new Date().getFullYear();
    const ValueLincese = e.target.value;
    const differenceYear = currentYear - ValueLincese;
    if (differenceYear > 5) {
      console.log('chlop ma prawo jazdy wiecej niz 5 lat');
    }
    if (differenceYear > 3 && differenceYear < 5) {
      console.log('chlop ma prawo jazdy wiecej niz 3 lata i mniej niz 5');
    }
    if (differenceYear < 3) {
      console.log('nie mozesz wypozyczyc samochodu');
    }
  };

  const finalCost = (differenceYear, cost) => {
    const avgFuel = 8;
    setRentalCost(difference * avgFuel * cost * differenceYear);
    console.log(finalCost);
  };

  return (
    <section>
      <form>
        <DifferenceDate />
        <section className='userData'>
          <label>
            <input
              type='number'
              min={1900}
              placeholder='Rok otrzymania prawa jazdy'
              // value={valueYearLicense}
              onChange={handleValueLicense}
            />
            <input type='number' placeholder='ile km' min={10} step={10} />
          </label>
          <br />
          <label>
            Car Type:
            <select name='carType' value={carType} onChange={handleChange}>
              <option value='Basic'>Basic</option>
              <option value='Standard'>Standard</option>
              <option value='Medium'>Medium</option>
              <option value='Premium'>Premium</option>
            </select>
          </label>
          <br />
        </section>
        <button type='button' onClick={calculateRentalCost}>
          Oblicz wynajem samochodu
        </button>
      </form>
      <p>Koszt wynajmu: {rentalCost}zł</p>
    </section>
  );
};

export default RentCalculator;
