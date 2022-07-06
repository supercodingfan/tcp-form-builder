import { createTheme, ThemeOptions } from '@mui/material/styles';

const themeOptions: ThemeOptions = {
  palette: {
    primary: {
      main: '#273890',
    },
    secondary: {
      main: '#2b8def',
    },
    text: {
      primary: '#000',
      secondary: 'rgba(0, 0, 0, 0.6)',
    },
    colors: {
      black: {
        20: 'rgba(0, 0, 0, 0.26)',
        50: 'rgba(0, 0, 0, 0.04)',
        100: 'rgba(0, 0, 0, 0.08)',
        200: 'rgba(0, 0, 0, 0.26)',
        500: 'rgba(0, 0, 0, 0.54)',
        600: 'rgba(0, 0, 0, 0.46)',
        800: 'rgba(0, 0, 0, 0.87)',
      },
      gray: {
        100: '#979797',
      },
      white: '#fff',
    },
  },
  shape: {
    borderRadius: 6,
  },
  breakpoints: {
    values: {
      zero: 0,
      xxxs: 320,
      xxs: 500,
      xs: 768,
      sm: 900,
      md: 1024,
      lg: 1140,
      xl: 1280,
      xxl: 1440,
      xxxl: 1632,
    },
  },
  components: {
    MuiToolbar: {
      styleOverrides: {
        regular: ({ theme }) => ({
          minHeight: 60,
          paddingLeft: 24,
          paddingRight: 24,
          [theme.breakpoints.between('zero', 'xxxl')]: {
            minHeight: 60,
            paddingLeft: 24,
            paddingRight: 24,
          },
          [theme.breakpoints.up('xxxl')]: {
            height: 60,
            paddingLeft: 24,
            paddingRight: 24,
          },
        }),
      },
    },
  },
};

const theme = createTheme(themeOptions);

type Theme = typeof theme;

export type { Theme };
export { theme };
