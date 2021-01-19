import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    redirect: '/dashboard'
  },
  {
    path: '/dashboard', component: () => import('./pages/Dashboard'),
    children: [
      {path: '', component: () => import('./pages/frames/Home')}
    ]
  },
  {path: '/login', component: () => import('./pages/Login')}
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
