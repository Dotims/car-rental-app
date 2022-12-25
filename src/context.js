import { ThemeProvider } from '@emotion/react';
import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';

const defaultState = {
  roadLength: 0,
  drivingLicenseYear: 1900,
  rentFrom: '',
  rentTo: '',
  carCategory: '',
  difference: 0,
};

const AppContext = React.createContext(defaultState);

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const setRoadLength = (event) => {
    dispatch({ type: 'CHANGE_ROAD_LENGTH', payload: event });
  };

  const setDrivingLicenseYear = (event) => {
    dispatch({ type: 'CHANGE_DRIVING_LC', payload: event });
  };
  const setRentFrom = (event) => {
    dispatch({ type: 'CHANGE_RENT_FROM', payload: event });
  };
  const setRentTo = (event) => {
    dispatch({ type: 'CHANGE_RENT_TO', payload: event });
  };
  const setDifference = (event) => {
    dispatch({ type: 'CHANGE_DIFF', payload: event });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setRoadLength,
        setDrivingLicenseYear,
        setRentFrom,
        setDifference,
        setRentTo,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider, useGlobalContext };
