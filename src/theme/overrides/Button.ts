import { Theme } from '@mui/material';

export default function Button(theme: Theme) {
  const disabledStyle = {
    '&.Mui-disabled': {
      opacity: 0.8
    }
  };

  return {
    MuiButton: {
      defaultProps: {
        disableElevation: true
      },
      styleOverrides: {
        root: {
          borderRadius: 8,
          fontWeight: 500,
          textTransform: 'capitalize'
        },
        disabled: disabledStyle,
        sizeSmall: {
          height: 40
        },
        sizeMedium: {
          height: 48
        },
        sizeLarge: {},
        contained: {
          ...disabledStyle,
          color: theme.palette.primary.contrastText,
          '&:hover': {
            backgroundColor: theme.palette.primary.dark
          }
        },
        outlined: {
          ...disabledStyle
        },
        outlinedSecondary: {
          borderColor: theme.palette.grey[600],
          color: theme.palette.grey[100]
        }
      }
    }
  };
}
