import React from 'react';
import { Box, BoxProps, Typography } from '@mui/material';

type PageContentProps = BoxProps & {
  disableGutters?: boolean;
  title?: string | React.ReactNode;
};

export const PageContent = ({ children, disableGutters, sx, title, ...props }: PageContentProps) => {
  return (
    <React.Fragment>
      <Box p={disableGutters ? 0 : 2} sx={{ height: '100%', ...sx }} {...props}>
        {typeof title === 'string' ? (
          <Typography gutterBottom variant="h3">
            {title}
          </Typography>
        ) : (
          title
        )}
        {children}
      </Box>
    </React.Fragment>
  );
};
