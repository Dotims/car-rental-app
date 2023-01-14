import dayjs from 'dayjs';
import React, { useContext, useReducer } from 'react';
import { reducer } from './reducer';
import date from './helper';

const defaultState = {
  roadLength: 0,
  drivingLicenseYear: 1900,
  rentFrom: dayjs(date),
  rentTo: dayjs(date.addDays(5)),
  carCategory: '',
  difference: 0,
  newDriver: 1,
  kilometers: 0,
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
  const setNewDriver = (event) => {
    dispatch({ type: 'CHANGE_NEW_DRIVER', payload: event });
  };
  const setKilometers = (event) => {
    dispatch({ type: 'CHANGE_KILOMETERS', payload: event });
  };

  return (
    <AppContext.Provider
      value={{
        ...state,
        setRoadLength,
        setDrivingLicenseYear,
        setRentFrom,
        setRentTo,
        setNewDriver,
        setKilometers,
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
