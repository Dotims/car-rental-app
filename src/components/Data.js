import { React, useState } from 'react';
import { StyledTitle } from '../styles/styles';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import '../styles/Data.css';
import dayjs from 'dayjs';
import {
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField,
} from '@mui/material';
import {
  DatePicker,
  LocalizationProvider,
  MobileDatePicker,
} from '@mui/x-date-pickers';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import { useGlobalContext } from '../context';
import calculations from './calculations';

const Data = () => {
  const date = new Date();
  const futureDate = date.getDate();
  date.setDate(futureDate);
  const [priceRating, setPriceRating] = useState('Basic');
  const [value, setValue] = useState(dayjs(date.toLocaleDateString('en-CA')));

  const {
    roadLength,
    drivingLicenseYear,
    rentFrom,
    rentTo,
    carCategory,
    setRoadLength,
    setDrivingLicenseYear,
    setRentFrom,
  } = useGlobalContext();

  console.log('rentFrom: ', rentFrom);

  const handleChange = (event) => {
    setPriceRating(event.target.value);
  };

  // console.log('roadLength: ', roadLength);
  // console.log('roadLength: ', drivingLicenseYear);

  return (
    <article className='data-input'>
      <section className='input-container'>
        <div className='single-input'>
          <StyledTitle className='input-info'>długość drogi:</StyledTitle>
          <TextField
            className='inputs'
            label='kilometry'
            type='number'
            value={roadLength}
            onChange={(e) => setRoadLength(e.target.value)}
            InputProps={{
              inputProps: {
                min: 10,
                step: 5,
              },
            }}
          />
        </div>
        <div className='single-input'>
          <p className='input-info'>rok otrzymania prawa jazdy:</p>
          <TextField
            label='rok'
            type='number'
            min={1900}
            value={drivingLicenseYear}
            onChange={(e) => setDrivingLicenseYear(e.target.value)}
            InputProps={{
              inputProps: {
                min: 1900,
              },
            }}
          />
        </div>
        <div className='single-input'>
          <p className='input-info'>od kiedy chcesz wynajmować:</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              // disableFuture
              className='inputs'
              label='od kiedy'
              openTo='year'
              value={rentFrom}
              // value={rentFrom}
              onChange={(value) => {
                console.log(value);
                setRentFrom(value);
              }}
              views={['year', 'month', 'day']}
              // onChange={(newValue) => {
              //   setValue(newValue);
              // }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className='single-input'>
          <p className='input-info'>do kiedy chcesz wynajmować:</p>
          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <DatePicker
              // disableFuture
              label='do kiedy'
              openTo='year'
              inputFormat='dd.MM.yyyy'
              value={value}
              onChange={(newValue) => {
                setValue(newValue);
              }}
              renderInput={(params) => <TextField {...params} />}
            />
          </LocalizationProvider>
        </div>
        <div className='single-input'>
          <p className='input-info'>Kategoria samochodowa:</p>
          <FormControl fullWidth>
            <InputLabel id='demo-simple-select-label'>
              wybierz kategorie
            </InputLabel>
            <Select
              labelId='demo-simple-select-label'
              value={priceRating}
              label='wybierz kategorie'
              onChange={handleChange}
            >
              <MenuItem value='basic'>Basic</MenuItem>
              <MenuItem value='Standard'>Standard </MenuItem>
              <MenuItem value='Medium'>Medium </MenuItem>
              <MenuItem value='Premium'>Premium </MenuItem>
            </Select>
          </FormControl>
        </div>
        <div className='button-submit'>
          <Button variant='outlined' className='button'>
            oblicz koszt
          </Button>
        </div>
      </section>
      <div className='underline'></div>
    </article>
  );
};

export default Data;
