import { styled } from "@mui/material";

export const StyledContainer = styled('div')(({ theme }) => ({
    width: '90%',
    margin: '0 auto',
    [theme.breakpoints.up("sm")]: {
        textAlign: 'center',
        fontSize: '2rem',
        padding: '25px',
    },
    [theme.breakpoints.up("md")]: {
        width: '70%',
        fontSize: '2rem',
        padding: '25px',
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: '2.8rem',
        padding: '25px',
    },
}));

export const StyledHeader = styled('h1')(({ theme }) => ({
    marginTop: '35px',
    display: 'flex',
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: '1.8rem',
    color: '#448AFF',
    [theme.breakpoints.up("sm")]: {
        marginTop: '0',
        textAlign: 'center',
        fontSize: '2rem',
        padding: '25px',
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '2rem',
        padding: '25px',
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: '2.8rem',
        padding: '25px',
    },
}));


export const StyledDescription = styled('p')(({ theme }) => ({
    marginTop: '15px',
    fontSize: '1.1rem',
    [theme.breakpoints.up("sm")]: {
        marginTop: '0',
    },
    [theme.breakpoints.up("md")]: {
        fontSize: '1.2rem',
    },
    [theme.breakpoints.up("lg")]: {
        fontSize: '1.5rem',
    },
}));