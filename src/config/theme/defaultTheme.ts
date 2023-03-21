import { createTheme } from '@mui/material';

const defaultTheme = createTheme({
  palette: {
    primary: {
      main: '#FF8533',
      contrastText: '#fff',
    },
    secondary: {
      main: '#2a3759',
    },
  },
});

export default defaultTheme;
