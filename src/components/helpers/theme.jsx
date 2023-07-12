import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#15161B',
      focus: '#FE4801',
      hover: 'darkorange',
    },
    text: {
      primary: '#222',
      secondary: '#fff',
    },
  },
});

export default theme;