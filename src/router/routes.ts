import { RouteObject } from 'react-router-dom';
import LoginPage from 'pages/access/login';
import RegisterPage from 'pages/access/register';
import PortalPage from 'pages/portal/portal';
import UsersPage from 'pages/portal/users';
import NotFoundPage from 'pages/access/not-found';

type RouteMap = RouteObject & {
  title?: string;
};

// For reference only
// type DeepKeys<T> = T extends object
//   ? {
//       [K in keyof T]-?: K extends string | object ? `${K}` | `${DeepKeys<T[K]>}` : never;
//     }[keyof T]
//   : never;

export const Routes: RouteMap[] = [
  {
    id: 'Login',
    path: 'login',
    Component: LoginPage
  },
  {
    id: 'Register',
    path: 'register',
    Component: RegisterPage
  },
  {
    id: 'Portal',
    path: '/',
    Component: PortalPage,
    children: [
      {
        id: 'Users',
        path: '',
        Component: UsersPage
      }
    ]
  },
  { path: '*', Component: NotFoundPage }
];
