import { alpha } from '@mui/material/styles';
import { Theme } from '@mui/material';

export default function OutlinedInput(theme: Theme) {
  return {
    MuiOutlinedInput: {
      styleOverrides: {
        notchedOutline: {
          borderColor: theme.palette.input.light
        },
        root: {
          borderRadius: 8,
          borderWidth: 1,
          borderColor: theme.palette.input.light,
          backgroundColor: theme.palette.input.main,
          textarea: {
            padding: '10px 12px'
          },
          '&:hover .MuiOutlinedInput-notchedOutline': {
            borderColor: 'inputLight'
          },
          '&.Mui-focused': {
            boxShadow: `0 0 0 1px ${alpha(theme.palette.input.main, 0.2)}`,
            '& .MuiOutlinedInput-notchedOutline': {
              borderWidth: 1
            }
          },
          '&.Mui-error': {
            '&:hover .MuiOutlinedInput-notchedOutline': {
              // borderColor: heme.palette.error.light
            },
            '&.Mui-focused': {
              boxShadow: `0 0 0 1px ${alpha(theme.palette.error.main, 0.2)}`,
              '& .MuiOutlinedInput-notchedOutline': {
                border: `1px solid ${theme.palette.input.light}`
              }
            }
          }
        },
        input: {
          padding: '0 12px'
        },
        multiline: { padding: 0 },
        inputSizeSmall: {},
        inputMultiline: {}
      }
    }
  };
}
