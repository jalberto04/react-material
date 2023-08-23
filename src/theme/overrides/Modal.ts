export default function Modal() {
  return {
    MuiModal: {
      defaultProps: {},
      styleOverrides: {
        root: {},
        backdrop: { background: 'rgba(0, 0, 0, 0.2)' }
      }
    }
  };
}
