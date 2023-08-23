import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { User } from 'api/types';

export type FormDataRegister = Partial<User> & {
  accepted: boolean;
  password: string;
};

export const FormSchemaRegister = yup.object().shape({
  accepted: yup.boolean().oneOf([true], 'Please read and accept the terms and conditions'),
  firstName: yup.string().required('Please enter your first name'),
  lastName: yup.string().required('Please enter your last name'),
  email: yup.string().email('Please enter a valid email address').required('Please enter your email address'),
  password: yup.string().test('is-valid-password', 'Your password must be at least 8 characters', (value) => {
    // Must Contain 8 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character
    return /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/.test(value || '');
  })
});

export type FormReturnRegister = UseFormReturn<FormDataRegister>;

export const useFormRegister = (props?: { defaultValues?: Partial<FormDataRegister> }) => {
  return useForm<FormDataRegister>({
    defaultValues: {
      accepted: false,
      ...props?.defaultValues
    },
    mode: 'onChange',
    // @ts-expect-error RHF V7 limitation #789
    resolver: yupResolver<FormDataRegister>(FormSchemaRegister)
  });
};
