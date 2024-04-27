import workSans from '@/fonts/worksans';
import {TextField, createTheme} from '@mui/material';

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#090940',
    },
    secondary: {
      main: '#7C97FF',
    },
    error: {
      main: '#FE645E',
    },
  },

  typography: {
    fontFamily: workSans.style.fontFamily,
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1400,
    },
  },
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          width: '50%',
          height: '90%',
          borderRadius: '0 15px 15px',
          backgroundColor: '#191C4D',
          opacity: '0.9',
        },
      },
    },
    MuiTypography: {},
    MuiTextField: {
      styleOverrides: {
        root: {
          backgroundColor: 'white',
          borderRadius: '10px',
          '&:hover': {
            backgroundColor: '#C4D7FF',
            '.MuiFilledInput-root': {
              backgroundColor: '#C4D7FF',
              color: '#3137D1',
              borderRadius: '10px',
              cursor: 'pointer',
            },
          },
        },
      },
    },
  },
});

const customTypography = {
  h1: {
    fontSize: pxToRem(35),
    color: '#fff',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: pxToRem(48),
    },
  },
  h2: {
    fontSize: pxToRem(30),
    color: '#000',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: pxToRem(40),
    },
  },
  h3: {
    fontSize: pxToRem(24),
    color: '#fff',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: pxToRem(40),
    },
  },
  body1: {
    fontSize: pxToRem(14),
    color: '#000000',
    fontWeight: 400,
    [theme.breakpoints.up('sm')]: {
      fontSize: pxToRem(17),
    },
  },
  body2: {
    fontSize: pxToRem(15),
    color: '#fff',
    fontWeight: 500,
    [theme.breakpoints.up('md')]: {
      fontSize: pxToRem(20),
    },
  },
};

if (theme?.components?.MuiTypography) {
  theme.components.MuiTypography.styleOverrides = customTypography;
}

export default theme;
