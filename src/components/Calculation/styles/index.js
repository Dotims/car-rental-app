import { styled } from '@mui/system';

export const StyledSection = styled('label')({
  display: 'flex',
  alignItems: 'center',
  flexDirection: 'column',

  justifyContent: 'center',
  marginTop: '3em',
});

export const StyledAdditionalData = styled('div')({
  display: 'flex',
  justifyContent: 'center',
  gap: '1em',
  padding: '1em',
});

export const TextField = styled('div')({
  margin: '2rem',
});

export const FinalCosts = styled('div')({
  margin: '2rem',
  padding: '1.5em',
  borderRadius: '13px',
  background: '#2980b9',
  color: 'white',
  fontSize: '18px',
  fontWeight: '700',
  width: '40%',
  boxShadow: '0px 3px 7px 0px black',
  textAlign: 'center',
});

export const CostDetails = styled('p')({
  padding: '5px',
});
