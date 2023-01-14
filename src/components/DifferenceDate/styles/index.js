import { styled } from '@mui/system';
import { DesktopDatePicker } from '@mui/x-date-pickers';

export const StyledDateWrapper = styled('div')(({ theme }) => ({
  display: 'flex',
  columnGap: '1em',
  flexDirection: 'column',
  justifyContent: 'center',
  [theme.breakpoints.up("sm")]: {
    flexDirection: 'row',
  },
}));

export const StyledDatePicker = styled(DesktopDatePicker)(({ theme }) => ({
  width: '280px',
  marginBottom: '30px',
  [theme.breakpoints.up("sm")]: {
    marginBottom: '0',
  },
}));
