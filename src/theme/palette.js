import { colors } from '@material-ui/core';

const white = '#FFFFFF';
const black = '#000000';

export default {
  black : '#000000',
  white : '#FFFFFF',
  primary: {
    contrastText: white,
    dark: '#0B3E45',
    main: '#50B59E',
    light: '#116A76'
  },
  secondary: {
    contrastText: white,
    dark: '#0B3E45',
    main: '#116A76',
    light: '#DBF4F2'
  },
  sub: {
    main: '#DAF4D9',
    dark: '#116A76',
    light: '#CAE0CB'
  },
  error: {
    contrastText: white,
    dark: colors.red[900],
    main: '#D44848',
    light: colors.red[400]
  },
  text: {
    primary: '#333333',
    secondary: '#687178',
    link: colors.blue[600]
  },
  link: colors.blue[800],
  icon: colors.blueGrey[600],
  background: {
    default: '#FFFFFF',
    paper: white
  },
  divider: '#FFFFFF',
  border: {
    main: '#D4DDE3'
  },
};
