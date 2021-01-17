import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
  {path: '/', component: () => import('./pages/Home')},
  {path: '/post', component: () => import('./pages/Post')}
];
const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
