import {
  Dashboard,
} from 'screens';

const baseUserUrl = 'dashboard';

const DashboardRoutes = [
  {
    path: `/${baseUserUrl}`,
    component: Dashboard,
    // role: [1,2]
  },
];

export default DashboardRoutes;
