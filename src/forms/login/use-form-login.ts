import { useForm, UseFormReturn } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { isEmpty } from 'lodash';

import { LoginParams } from 'api/types';

export type FormDataLogin = LoginParams & {
  rememberMe: boolean;
};

export const FormSchemaLogin = yup
  .object()
  .shape({
    username: yup.string(),
    password: yup.string(),
    rememberMe: yup.boolean()
  })
  .test('is-valid-login', 'Please enter your username and password', (fields) => {
    return !isEmpty(fields.username) && !isEmpty(fields.password);
  });

export type FormReturnLogin = UseFormReturn<FormDataLogin>;

export const useFormLogin = (props?: { defaultValues?: Partial<FormDataLogin> }) => {
  return useForm<FormDataLogin>({
    defaultValues: { rememberMe: false, ...props?.defaultValues },
    // @ts-expect-error RHF V7 limitation #789
    resolver: yupResolver<FormDataLogin>(FormSchemaLogin)
  });
};
