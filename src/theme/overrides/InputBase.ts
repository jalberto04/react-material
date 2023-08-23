import { Theme } from '@mui/material';

export default function InputBase(theme: Theme) {
  return {
    MuiInputBase: {
      styleOverrides: {
        root: {
          minHeight: 42,
          textarea: {
            padding: 0
          },
          input: {
            paddingLeft: 12,
            paddingRight: 12,
            // color: 'textPrimary',
            '&::placeholder': {
              // textOverflow: 'ellipsis !important',
              color: 'textDisabled'
            },
            '&:-webkit-autofill': {
              borderRadius: 8,
              WebkitBoxShadow: `0 0 0 100px ${theme.palette.input.main} inset`,
              WebkitTextFillColor: 'textPrimary'
            }
          },
          fieldset: {
            top: 0,
            borderColor: 'inputLight',
            borderRadius: 8,
            legend: {
              display: 'none'
            }
          }
        }
      }
    }
  };
}
