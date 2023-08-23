import { Alert, Box, Typography } from '@mui/material';
import React from 'react';
import { Control, FieldValues } from 'react-hook-form';

type FormProps<T extends FieldValues> = {
  children: React.ReactNode;
  error?: string;
  title?: string;
  control: Control<T>;
};

export const Form = <T extends FieldValues>({ children, error, title }: FormProps<T>) => {
  return (
    <form>
      {!!title && (
        <Typography gutterBottom variant="h2" color="black">
          {title}
        </Typography>
      )}

      <Box data-testid="form[alert-message]">
        {!!error && (
          <Alert severity="error" sx={{ mb: 1.5 }}>
            {error}
          </Alert>
        )}
      </Box>

      {children}
    </form>
  );
};
