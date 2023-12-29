import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';
import Explore from '@/views/ExploreView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/student',
      component: () => Explore,
    },
  ],
})
