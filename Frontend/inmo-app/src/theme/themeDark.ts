import workSans from '@/fonts/worksans';
import {createTheme} from '@mui/material';

function pxToRem(value: number) {
  return `${value / 16}rem`;
}

const themeDark = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#9747FF',
    },
    secondary: {
      main: '#032248',
    },
    error: {
      main: '#FE645E',
    },
    success: {
      main: '#C4FF47',
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
    [themeDark.breakpoints.up('md')]: {
      fontSize: pxToRem(48),
    },
  },
  h2: {
    fontSize: pxToRem(30),
    color: '#000',
    fontWeight: 500,
    [themeDark.breakpoints.up('md')]: {
      fontSize: pxToRem(40),
    },
  },
  h3: {
    fontSize: pxToRem(24),
    color: '#fff',
    fontWeight: 500,
    [themeDark.breakpoints.up('md')]: {
      fontSize: pxToRem(40),
    },
  },
  body1: {
    fontSize: pxToRem(14),
    color: '#000000',
    fontWeight: 400,
    [themeDark.breakpoints.up('sm')]: {
      fontSize: pxToRem(17),
    },
  },
  body2: {
    fontSize: pxToRem(14),
    color: '#fff',
    fontWeight: 500,
    [themeDark.breakpoints.up('md')]: {
      fontSize: pxToRem(23),
    },
  },
};

if (themeDark?.components?.MuiTypography) {
  themeDark.components.MuiTypography.styleOverrides = customTypography;
}

export default themeDark;
