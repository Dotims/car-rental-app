import React from 'react';

const calculations = () => {
  const fuelPrice = 6.5;
  const pricePerDay = 150;
  const avgFuel = 7;
  const location = '';
  const availableModels = 2;
  let FeesCar = 0;

  const priceCategoryCar = {
    basic: 1,
    standard: 1.3,
    medium: 1.6,
    premium: 2,
  };

  const rentalFees = () => {
    FeesCar = fuelPrice * pricePerDay * avgFuel;
    console.log(FeesCar);
  };

  return (
    <div>
      <p>{rentalFees}</p>
    </div>
  );
};

export default calculations;
