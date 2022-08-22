import Auth from './pages/Auth';
import ListUP from './pages/ListUP';
import InfoUP from './pages/InfoUP';
import FavoriteUP from './pages/FavoriteUP';

export const authRoutes = [
  {
    path: '/',
    Component: ListUP,
  },
  {
    path: '/auth',
    Component: Auth,
  },
  {
    path: '/listup',
    Component: ListUP,
  },
  {
    path: '/infoup',
    Component: InfoUP,
  },
  {
    path: '/favoriteup',
    Component: FavoriteUP,
  },
];

export const publicRoutes = [
  {
    path: '/auth',
    Component: Auth,
  },
];
