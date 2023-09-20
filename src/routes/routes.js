import { Home, Login, Question } from '../pages';
import Contact from '../pages/Contact';

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
  {
    path: '/contact',
    element: Contact,
  },
];
