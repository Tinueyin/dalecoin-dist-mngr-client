import DashBoard from '../pages/DashBoard';
import Login from '../pages/Login';
import AdminDashBoard from '../pages/AdminDashBoard';
import NotFound from '../pages/NotFound';

export default [
  {
    name: 'dashboard',
    component: DashBoard,
    exact: true,
    path: '/'
  },
  {
    name: 'login',
    component: Login,
    exact: true,
    path: '/login'
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
