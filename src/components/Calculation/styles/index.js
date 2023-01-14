import { TextField } from '@mui/material';
import { styled } from '@mui/system';

export const StyledSection = styled('div')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',
  justifyContent: 'center',
  marginTop: '70px',
});

export const StyledAdditionalData = styled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  gap: '1em',
  padding: '1em',
  [theme.breakpoints.up("sm")]: {
    flexDirection: 'row',
  },
}));

export const StyledFinalCosts = styled('div')(({ theme }) => ({
  margin: '2rem',
  padding: '1em 25px',
  borderRadius: '5px',
  color: '#448aff',
  fontSize: '18px',
  fontWeight: '700',
  width: '100%',
  boxShadow: '1px 3px 15px 3px #dddddd',
  textAlign: 'center',
  [theme.breakpoints.up("md")]: {
    width: '50%',
    maxWidth: '400px'
  },
}));

export const StyledCostDetails = styled('p')({
  padding: '5px',
});


export const StyledInput = styled(TextField)(({ theme }) => ({
  width: '280px',
  marginBottom: '30px',
  [theme.breakpoints.up("sm")]: {
    marginBottom: '0',
  },
}));

export const StyledSelectWrapper = styled('div')({
  display: 'flex',
  fontSize: '24px',
  alignItems: 'center',
  '& > div': {
    marginLeft: '10px'
  }
});
