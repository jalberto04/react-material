import { Theme } from '@mui/material';

export default function FormHelperText(theme: Theme) {
  return {
    MuiFormHelperText: {
      styleOverrides: {
        root: {
          fontSize: theme.typography.body1.fontSize
        }
      }
    }
  };
}
