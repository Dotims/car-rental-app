import { React, useState } from 'react';
import { useGlobalContext } from '../../context';
import DifferenceDate from '../DifferenceDate';
import { Button, MenuItem, Select, TextField } from '@mui/material';
import {
  StyledAdditionalData,
  StyledSection,
  StyledFinalCosts,
  StyledCostDetails,
  StyledInput,
  StyledSelectWrapper,
} from './styles';

const RentCalculator = () => {
  const [carType, setCarType] = useState('Basic');
  const [rentalCost, setRentalCost] = useState(0);
  const [year, setYear] = useState(2000);
  const [bruttoPrice, setBruttoPrice] = useState(0);
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

    const avgFuel = 8;
    const costPerKm = (kilometers / 100) * avgFuel;
    const timeRentCar = rentPerDay * differenceDays;

    const tempRentalCost = parseInt(newDriver * timeRentCar * carTypeCost * costPerKm)

    setRentalCost(tempRentalCost);
    setBruttoPrice(parseInt(tempRentalCost * 1.23));
  };

  const handleValueLicense = (e) => {
    const currentYear = new Date().getFullYear();
    const valueLicense = e.target.value;
    setYear(valueLicense);
    const differenceYear = currentYear - valueLicense;
    console.log(differenceYear);
    if (differenceYear < 5 && differenceYear > 3) {
      setNewDriver(1.2);
    }
    if (differenceYear < 3) {
      setNewDriver(1);
    }
  };

  return (
    <StyledSection>
      <DifferenceDate />
      <StyledAdditionalData>
        <StyledInput
          label='Rok otrzymania prawa jazdy'
          type='number'
          inputProps={{ min: 2000 }}
          value={year}
          onChange={handleValueLicense}
        />
        <StyledInput
          type='number'
          label='ile km'
          inputProps={{ min: 10, step: 10 }}
          value={kilometers}
          onChange={(e) => setKilometers(e.target.value)}
        />
      </StyledAdditionalData>

      <StyledSelectWrapper>
        Typ Samochodu:
        <Select
          name='carType'
          value={carType}
          onChange={(e) => setCarType(e.target.value)}
        >
          <MenuItem value='Basic'>Basic</MenuItem>
          <MenuItem value='Standard'>Standard</MenuItem>
          <MenuItem value='Medium'>Medium</MenuItem>
          <MenuItem value='Premium'>Premium</MenuItem>
        </Select>
      </StyledSelectWrapper>
      <Button
        sx={{ padding: '15px 20px', borderRadius: '10px', marginTop: '40px' }}
        type='button'
        variant='contained'
        onClick={calculateRentalCost}>
        Oblicz wynajem samochodu
      </Button>

      <StyledFinalCosts>
        <StyledCostDetails>Koszt wynajmu netto: {rentalCost} z??</StyledCostDetails>
        <StyledCostDetails>Koszt wynajmu Brutto: {bruttoPrice} z??</StyledCostDetails>
      </StyledFinalCosts>
    </StyledSection>
  );
};

export default RentCalculator;
