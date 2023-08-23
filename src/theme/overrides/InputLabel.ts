export default function InputLabel() {
  return {
    MuiInputLabel: {
      styleOverrides: {
        root: {
          marginBottom: 2,
          fontWeight: 500,
          color: 'textSecondary'
        },
        outlined: {
          lineHeight: '0.8em',
          '&.MuiInputLabel-sizeSmall': {
            lineHeight: '1em'
          },
          '&.MuiInputLabel-shrink': {
            background: 'background.paper',
            lineHeight: '1.4375em'
          }
        }
      }
    }
  };
}
