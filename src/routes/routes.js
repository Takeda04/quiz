import { lazy } from 'react';
import { Home, Login, Question } from '../pages';

export const routes = [
  {
    path: '/',
    element: Home,
  },
  {
    path: '/login',
    element: Login,
  },
  {
    path: '/questions',
    element: Question,
  },
];
