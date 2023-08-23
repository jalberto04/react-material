import { useNavigate } from 'react-router-dom';
import { useMutation } from '@tanstack/react-query';
import { ResponseError } from 'api/types';
import { Authenticate } from 'api/services';
import { FormDataLogin } from 'forms/login';

export const useAuthenticateMutation = () => {
  const navigate = useNavigate();
  const mutation = useMutation<Awaited<ReturnType<typeof Authenticate>>, ResponseError, FormDataLogin>({
    mutationFn: (payload) => {
      return Authenticate({
        username: payload.username,
        password: payload.password
        // expiresInMins: 60, // optional
      });
    },
    onSuccess: (response) => {
      // do store dispatch
      localStorage.setItem('authorization', JSON.stringify(response));
      navigate('/', { replace: true });
    }
  });

  return mutation;
};
