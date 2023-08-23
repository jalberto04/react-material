export default function Skeleton() {
  return {
    MuiSkeleton: {
      defaultProps: {},
      styleOverrides: {
        root: {
          height: 10,
          backgroundColor: 'divider'
        }
      }
    }
  };
}
