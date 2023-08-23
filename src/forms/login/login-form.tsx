import { useEffect, useRef } from 'react';
import { useWatch } from 'react-hook-form';
import { Checkbox, FormControlLabel, Link, Stack, Typography } from '@mui/material';
import { InputController } from 'components/primitives';
import { FormReturnLogin } from './use-form-login';

type LoginFormProps = { isLoading?: boolean; form: FormReturnLogin };

const LoginForm = ({ form }: LoginFormProps) => {
  const usernameRef = useRef<HTMLInputElement>();
  const rememberMe = useWatch({ control: form.control, name: 'rememberMe' });

  const toggleRemember = () => {
    form.setValue('rememberMe', !rememberMe);
  };

  useEffect(() => {
    if (usernameRef.current) {
      usernameRef.current.focus();
    }
  }, []);

  return (
    <Stack rowGap={1.5}>
      {/* Username field */}
      <InputController
        inputRef={usernameRef}
        name="username"
        label="Username"
        autoComplete="username"
        control={form.control}
      />

      {/* Password field */}
      <InputController
        name="password"
        type="password"
        autoComplete="current-password"
        label="Password"
        control={form.control}
      />

      {/* Remember me */}
      <Stack direction="row" alignItems="center" justifyContent="space-between">
        <FormControlLabel
          control={
            <Checkbox
              name="checked"
              color="primary"
              size="small"
              checked={rememberMe ?? false}
              onChange={toggleRemember}
            />
          }
          label={<Typography variant="body1">Remember my account</Typography>}
        />
        <Link underline="hover">
          <Typography variant="body1">Forgot password?</Typography>
        </Link>
      </Stack>
    </Stack>
  );
};

export default LoginForm;
