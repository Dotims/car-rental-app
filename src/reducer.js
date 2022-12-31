export const reducer = (state, action) => {
  if (action.type === 'CHANGE_ROAD_LENGTH') {
    return { ...state, roadLength: action.payload };
  }
  if (action.type === 'CHANGE_DRIVING_LC') {
    return { ...state, drivingLicenseYear: action.payload };
  }
  if (action.type === 'CHANGE_RENT_FROM') {
    return { ...state, rentFrom: action.payload };
  }
  if (action.type === 'CHANGE_RENT_TO') {
    return { ...state, rentTo: action.payload };
  }
  if (action.type === 'CHANGE_DIFF') {
    return { ...state, difference: action.payload };
  }
  if (action.type === 'CHANGE_NEW_DRIVER') {
    return { ...state, newDriver: action.payload };
  }
  if (action.type === 'CHANGE_KILOMETERS') {
    return { ...state, kilometers: action.payload };
  }
  throw new Error('no matching action type');
};
