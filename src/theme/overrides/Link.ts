import { Theme } from '@mui/material';

export default function Link(theme: Theme) {
  return {
    MuiLink: {
      defaultProps: {
        color: theme.palette.primary.main,
        underline: 'hover'
      }
    }
  };
}
