import React from 'react';
import { FormHelperText, InputLabel, InputProps, Stack } from '@mui/material';
import { InputField } from './input-field';

export type FormControlProps = InputProps & {
  errorMessage?: string;
  label?: string;
};

export const FormControl = ({ error, errorMessage, label, name, placeholder, type, ...props }: FormControlProps) => {
  return (
    <Stack>
      <InputLabel>{label}</InputLabel>
      <InputField aria-label={label} name={name} type={type} placeholder={placeholder} {...props} />
      {!!errorMessage && <FormHelperText error={error}>{errorMessage}</FormHelperText>}
    </Stack>
  );
};
