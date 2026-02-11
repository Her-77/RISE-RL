import { createRouter, createWebHashHistory } from 'vue-router';

import HomeView from '../views/HomeView.vue';
import TeamView from '../views/TeamView.vue';
import NewsView from '../views/NewsView.vue';
import JoinView from '../views/JoinView.vue';

const router = createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/team',
      name: 'team',
      component: TeamView,
    },
    {
      path: '/news',
      name: 'news',
      component: NewsView,
    },
    {
      path: '/join',
      name: 'join',
      component: JoinView,
    },
  ],
  scrollBehavior() {
    return { top: 0, behavior: 'smooth' };
  },
});

export default router;
