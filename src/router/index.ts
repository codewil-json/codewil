import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import AboutView from '../views/AboutView.vue';
import HomeView from '../views/HomeView.vue';
import LinksView from '../views/LinksView.vue';
import NotFoundView from '../views/NotFoundView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView,
  },
  {
    path: '/blog',
    name: 'blog',
    component: () => import('../views/BlogView.vue'),
  },
  {
    path: '/blog/:slug',
    name: 'blog-article',
    component: () => import('../views/BlogArticleView.vue'),
  },
  {
    path: '/links',
    name: 'links',
    component: LinksView,
  },
  {
    path: '/black-november',
    name: 'black-november',
    component: () => import('../views/BlackNovemberView.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    name: 'not-found',
    component: NotFoundView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior(to) {
    if (to.hash) return { el: to.hash, top: 88, behavior: 'smooth' };
    return { top: 0 };
  },
});

export default router;
