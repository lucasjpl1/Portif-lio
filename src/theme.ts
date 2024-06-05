import { createTheme, responsiveFontSizes } from '@mui/material';


let theme = createTheme({
  palette: {
    primary: {
      main: '#232323',
    },
    secondary: {
      main: '#4f8e38',
    },
  },
  typography: { 
    fontFamily: "Helvetica Neue"
}
});

theme = responsiveFontSizes(theme);

export default theme;