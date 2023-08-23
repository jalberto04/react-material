import { useEffect, useRef } from 'react';
import { useWatch } from 'react-hook-form';
import { Box, Checkbox, FormControlLabel, Link, Stack, Typography } from '@mui/material';

import { InputController } from 'components/primitives';
import { FormReturnRegister } from './use-form-register';

type RegisterFormProps = { form: FormReturnRegister };

const RegisterForm = ({ form }: RegisterFormProps) => {
  const firstNameRef = useRef<HTMLInputElement>();
  const accepted = useWatch({ control: form.control, name: 'accepted' });

  const handleTermsCondition = () => {
    form.setValue('accepted', !accepted, { shouldValidate: true });
  };

  useEffect(() => {
    if (firstNameRef.current) {
      firstNameRef.current.focus();
    }
  }, []);

  return (
    <Stack rowGap={2}>
      <Stack direction={{ xs: 'column', sm: 'row' }} columnGap={1.5} rowGap={2} mt={1.5}>
        {/* First name field */}
        <Box flex={1}>
          <InputController
            inputRef={firstNameRef}
            name="firstName"
            label="First name"
            placeholder="Enter first name"
            control={form.control}
          />
        </Box>

        {/* Last name field */}
        <Box flex={1}>
          <InputController name="lastName" label="Last name" placeholder="Enter last name" control={form.control} />
        </Box>
      </Stack>

      {/* Email field */}
      <InputController
        name="email"
        label="Email"
        autoComplete="email"
        placeholder="Enter email address"
        control={form.control}
      />

      {/* Password field */}
      <InputController
        name="password"
        type="password"
        label="Password"
        placeholder="Enter password"
        autoComplete="new-password"
        control={form.control}
      />

      <FormControlLabel
        sx={{ px: 1, columnGap: 1, alignItems: { xs: 'flex-start' } }}
        control={
          <Checkbox
            name="checked"
            color="primary"
            size="small"
            checked={accepted || false}
            sx={{ p: 0 }}
            onChange={handleTermsCondition}
          />
        }
        label={
          <Typography variant="body1">
            I have read and agree to the <Link underline="hover">Terms and Conditions</Link>
          </Typography>
        }
      />
    </Stack>
  );
};

export default RegisterForm;
