import { Authorization, LoginParams, PaginateUsers, User } from './types';
import { Http } from './http-request';

// /auth/login
export const Authenticate = (payload: LoginParams): Promise<Authorization> => {
  return Http.postRequest(Authenticate.key, undefined, payload);
};

Authenticate.key = 'auth/login';

// /users
export const GetUsers = (params?: { skip?: number }): Promise<PaginateUsers> => {
  return Http.getRequest(GetUsers.key, params);
};

GetUsers.key = 'users';

// /users
export const CreateUser = (payload: Partial<User>): Promise<Partial<User>> => {
  return Http.postRequest(CreateUser.key, undefined, payload);
};

CreateUser.key = 'users/add';
