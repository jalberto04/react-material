import { darken } from '@mui/material';

import * as colors from './colors';

declare module '@mui/material/styles/createPalette' {
  interface Palette {
    logo: string;
    input: Palette['primary'];
    accents: {
      purple: string;
      gray: string;
      green: string;
      blue: string;
      yellow: string;
      red: string;
    };
  }
  interface PaletteOptions {
    logo: string;
    input: PaletteOptions['primary'];
    accents: {
      purple: string;
      gray: string;
      green: string;
      blue: string;
      yellow: string;
      red: string;
    };
  }
}

const Light = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#ffffff'
  },
  primary: {
    light: '#D8E2F8',
    main: '#1A6AE2',
    dark: darken('#1A6AE2', 0.2),
    contrastText: '#ffffff'
  },
  secondary: {
    light: colors.grey[600],
    main: colors.grey[700],
    dark: colors.grey[800],
    contrastText: 'light'
  },
  grey: colors.grey,
  text: {
    primary: '#000000',
    secondary: '#7B7B7B',
    disabled: '#6B727D'
  },
  divider: '#e9e9e9',
  logo: '#000000',
  accents: {
    purple: '#702DFF',
    gray: '#747F8D',
    green: '#3BA55C',
    blue: '#3E70DD',
    yellow: '#FFB130',
    red: '#ED4245'
  },
  input: {
    light: '#e9e9e9',
    main: '#ffffff',
    contrastText: '#c4c4c4'
  },
  background: {
    paper: '#ffffff',
    default: '#f5f5f5',
    ...colors.background
  }
};

const Dark = {
  mode: 'light',
  common: {
    black: '#000000',
    white: '#ffffff'
  },
  primary: {
    light: '#D8E2F8',
    main: '#1A6AE2',
    dark: darken('#1A6AE2', 0.2),
    contrastText: '#ffffff'
  },
  secondary: {
    light: colors.grey[600],
    main: colors.grey[700],
    dark: colors.grey[800],
    contrastText: 'light'
  },
  grey: colors.grey,
  text: {
    primary: '#000000',
    secondary: '#7B7B7B',
    disabled: '#6B727D'
  },
  divider: '#e9e9e9',
  logo: '#000000',
  accents: {
    purple: '#702DFF',
    gray: '#747F8D',
    green: '#3BA55C',
    blue: '#3E70DD',
    yellow: '#FFB130',
    red: '#ED4245'
  },
  input: {
    light: '#e9e9e9',
    main: '#ffffff',
    contrastText: '#c4c4c4'
  },
  background: {
    paper: '#ffffff',
    default: '#f5f5f5',
    ...colors.background
  }
};

export default {
  Dark,
  Light
};
