import { AxiosResponse } from 'axios';

export type ResponseData<T = unknown> = {
  data: T;
  error?: {
    message?: string;
  };
};

export type ResponseError = {
  status: number;
  message?: string;
  response?: AxiosResponse;
};

export interface Paginate {
  total: number;
  skip: number;
  limit: number;
}

export interface Coordinates {
  lat: string;
  lng: string;
}

export interface Address {
  address: string;
  city: string;
  postalCode: string;
  state: string;
  coordinates?: Coordinates;
}

export interface Company {
  id?: number;
  name: string;
  address: Address;
}

export type Gender = 'male' | 'female';

export interface User {
  id?: number;
  username: string;
  gender: Gender;
  firstName: string;
  lastName: string;
  maidenName?: string;
  birthDate: string;
  email: string;
  address: Address;
  phone: string;
  ein?: string;
  ssn?: string;
  domain?: string;
  company: Company;
}

export interface PaginateUsers extends Paginate {
  users: User[];
}

export type LoginParams = {
  username: string;
  password: string;
  expiresInMins?: number;
};

export interface Authorization {
  id: number;
  username: string;
  email: string;
  firstName: string;
  lastName: string;
  gender: string;
  image: string;
  token: string;
}
