import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/student',
      component: () => import('@/views/StudentView.vue'),
    },
  ],
})
