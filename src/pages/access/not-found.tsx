import { Box, Link, Typography } from '@mui/material';

const NotFoundPage = () => {
  return (
    <Box display="flex" flexDirection="column" alignItems="center" justifyContent="center" minHeight="70vh">
      <Typography sx={{ fontSize: '6rem', fontWeight: 600 }}>404</Typography>
      <Typography variant="h5" mb={3} color="text.secondary">
        Oops! That page can&#x2019;t be found.
      </Typography>
      <Link href="/">Back to main page</Link>
    </Box>
  );
};

export default NotFoundPage;
