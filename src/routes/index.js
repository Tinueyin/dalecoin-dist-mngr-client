import Landing from '../pages/Landing';
import Verify from '../pages/Verify';
import UserDashBoard from '../pages/UserDashboard';
import AdminDashBoard from '../pages/AdminDashBoard';
import NotFound from '../pages/NotFound';

export default [
  {
    name: 'dashboard',
    component: Landing,
    exact: true,
    path: '/'
  },
  {
    name: 'verify',
    component: Verify,
    exact: true,
    path: '/verify/:token'
  },
  {
    name: 'userdashboard',
    component: UserDashBoard,
    exact: true,
    path: '/user'
  },
  {
    name: 'admindashboard',
    component: AdminDashBoard,
    exact: true,
    path: '/admin'
  },
  {
    name: 'notfound',
    component: NotFound,
    path: '*'
  }
];
