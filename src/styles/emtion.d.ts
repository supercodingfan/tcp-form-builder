import { Theme as CustomTheme } from './theme';

interface CustomPalette {
  colors: {
    black: {
      20: string;
      50: string;
      100: string;
      200: string;
      500: string;
      600: string;
      800: string;
    };
    gray: {
      100: string;
    };
    white: string;
  };
}

declare module '@mui/material/styles/createPalette' {
  export interface PaletteOptions extends CustomPalette {}
  export interface Palette extends CustomPalette {}
}

declare module '@mui/material/styles' {
  interface BreakpointOverrides {
    zero: true;
    xxxs: true;
    xxs: true;
    xs: true;
    sm: true;
    md: true;
    lg: true;
    xl: true;
    xxl: true;
    xxxl: true;
  }
}

declare module '@emotion/react' {
  export interface Theme extends CustomTheme {}
}
