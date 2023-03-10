import { TextField } from '@mui/material';
import { DesktopDatePicker, LocalizationProvider } from '@mui/x-date-pickers';
import { React } from 'react';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { useGlobalContext } from '../../context';
import { StyledDatePicker, StyledDateWrapper } from './styles';

const DifferenceDate = () => {
  const { rentFrom, setRentFrom, rentTo, setRentTo } = useGlobalContext();

  const handleInitialDate = (value) => {
    setRentFrom(value);
  };

  const handleFinalDate = (value) => {
    setRentTo(value);
  };

  return (
    <StyledDateWrapper>
      <LocalizationProvider dateAdapter={AdapterDayjs}>
        <StyledDatePicker
          label='Data wypożyczenia'
          inputFormat='DD/MM/YYYY'
          value={rentFrom}
          onChange={handleInitialDate}
          renderInput={(params) => <TextField {...params} />}
        />
        <StyledDatePicker
          label='Data oddania'
          inputFormat='DD/MM/YYYY'
          value={rentTo}
          onChange={handleFinalDate}
          renderInput={(params) => <TextField {...params} />}
        />
      </LocalizationProvider>
    </StyledDateWrapper>
  );
};

export default DifferenceDate;
