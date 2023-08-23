import { useMutation } from '@tanstack/react-query';
import { ResponseError } from 'api/types';
import { CreateUser } from 'api/services';
import { FormDataRegister } from 'forms/register';

export const useCreateUserMutation = () => {
  const mutation = useMutation<Awaited<ReturnType<typeof CreateUser>>, ResponseError, FormDataRegister>({
    mutationFn: (payload) => {
      return CreateUser(payload);
    }
  });
  return mutation;
};
