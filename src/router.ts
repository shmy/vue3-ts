import {createRouter, createWebHistory, RouteRecordRaw} from "vue-router";

const routes: RouteRecordRaw[] = [
    {path: '/', component: () => import('./pages/home.vue')},
    {path: '/post', component: () => import('./pages/post.vue')}
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});

export default router;