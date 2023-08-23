import React from 'react';
import { useBoolean } from 'usehooks-ts';
import { IconButton, InputAdornment, OutlinedInput, OutlinedInputProps } from '@mui/material';
import { Visibility, VisibilityOff } from '@mui/icons-material';

const InputField = React.forwardRef<React.ComponentRef<typeof OutlinedInput>, OutlinedInputProps>(
  ({ endAdornment, name, type, ...props }, ref) => {
    const showPassword = useBoolean();
    return (
      <OutlinedInput
        ref={ref}
        name={name}
        type={showPassword.value ? 'text' : type}
        endAdornment={
          type === 'password' ? (
            <InputAdornment position="end">
              <IconButton onClick={showPassword.toggle} edge="end" sx={{ padding: 0, color: 'textSecondary' }}>
                {showPassword.value ? (
                  <VisibilityOff fontSize="small" color="inherit" />
                ) : (
                  <Visibility fontSize="small" />
                )}
              </IconButton>
            </InputAdornment>
          ) : (
            endAdornment
          )
        }
        {...props}
        inputProps={{
          // for be able to get this component in react-test
          'data-testid': `input[${name}]`,
          ...props.inputProps
        }}
      />
    );
  }
);

InputField.displayName = 'InputField';

export { InputField };
