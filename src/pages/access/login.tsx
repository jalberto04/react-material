import { useMemo } from 'react';
import { useNavigate } from 'react-router';
import { useFormState } from 'react-hook-form';
import { Link, Stack, Typography } from '@mui/material';
import StatusCodes from 'http-status-codes';
import { chain, isEmpty } from 'lodash';

import { useAuthenticateMutation } from 'hooks';
import { PublicLayout } from 'components/layout';
import { Button, Form } from 'components/primitives';
import { LoginForm, useFormLogin } from 'forms/login';

const LoginPage = () => {
  const navigate = useNavigate();
  const form = useFormLogin();
  const { error, isLoading, mutateAsync } = useAuthenticateMutation();
  const { errors } = useFormState({ control: form.control });
  const errorMessage = useMemo(() => {
    if (!isEmpty(errors)) {
      return chain(errors).values().first().value()?.message;
    } else {
      return error?.status === StatusCodes.BAD_REQUEST ? 'The username or password is incorrect' : undefined;
    }
  }, [error, errors]);

  const handleLogin = async () => {
    try {
      await mutateAsync(form.getValues());
    } catch (error) {
      // Do nothing and use mutation error handler
    }
  };

  return (
    <PublicLayout>
      <Stack width="100%" maxWidth={{ xs: 380, sm: 400, lg: 480 }} rowGap={2.5} pt={2} px={4}>
        {/* Login form contains input fields */}
        <Form control={form.control} error={errorMessage} title="Login">
          <LoginForm form={form} />
        </Form>

        <Button aria-label="login" fullWidth loading={isLoading} onClick={form.handleSubmit(handleLogin)}>
          Login
        </Button>

        <Stack direction="row" spacing={1} alignSelf="center">
          <Typography variant="body1">Don&#8217;t have an account yet?</Typography>
          <Link underline="hover" sx={{ cursor: 'pointer' }} onClick={() => navigate('/register', { replace: true })}>
            Register
          </Link>
        </Stack>
      </Stack>
    </PublicLayout>
  );
};

export default LoginPage;
