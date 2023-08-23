import { useNavigate } from 'react-router';
import { useFormState } from 'react-hook-form';
import { Link, Stack, Typography } from '@mui/material';
import { Send as SendIcon } from '@mui/icons-material';

import { useCreateUserMutation } from 'hooks';
import { PublicLayout } from 'components/layout';
import { Button, Form } from 'components/primitives';
import { RegisterForm, useFormRegister } from 'forms/register';

const RegisterPage = () => {
  const navigate = useNavigate();
  const form = useFormRegister();
  // Api authentication
  const { isValid } = useFormState({ control: form.control });
  const register = useCreateUserMutation();

  const handleCreate = async () => {
    try {
      await register.mutateAsync(form.getValues());
    } catch (error) {
      // Do nothing and use mutation error handler
    }
  };

  return (
    <PublicLayout>
      <Stack width="100%" maxWidth={{ xs: 380, sm: 400, lg: 480 }} rowGap={2.5} pt={2} px={4}>
        {/* Completion message */}
        {register.isSuccess && (
          <Stack spacing={3}>
            <Stack direction="row" alignItems="center" spacing={1}>
              <SendIcon fontSize="large" color="primary" />
              <Typography variant="h2">Check your email</Typography>
            </Stack>
            <Typography variant="body1">
              To complete your registration, follow the link in the email we sent to{' '}
              <strong>{form.getValues().email}</strong>
            </Typography>
            <Link underline="hover" sx={{ cursor: 'pointer' }} onClick={() => navigate('/login', { replace: true })}>
              Return back to login
            </Link>
          </Stack>
        )}

        {/* Display registration form */}
        {!register.isSuccess && (
          <Stack rowGap={2.5}>
            <Form control={form.control} error={''} title="Register">
              <RegisterForm form={form} />
            </Form>

            <Button
              fullWidth
              disabled={!isValid}
              loading={register.isLoading}
              onClick={form.handleSubmit(handleCreate)}>
              Create Account
            </Button>

            <Stack direction="row" spacing={1} alignSelf="center">
              <Typography variant="body1">Already have an account?</Typography>
              <Link underline="hover" sx={{ cursor: 'pointer' }} onClick={() => navigate('/login', { replace: true })}>
                Back to Login
              </Link>
            </Stack>
          </Stack>
        )}
      </Stack>
    </PublicLayout>
  );
};

export default RegisterPage;
