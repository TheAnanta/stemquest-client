import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';
import Explore from '@/views/ExploreView.vue';
import Customize from '@/views/IdView.vue';
import Payment from '@/views/PaymentView.vue';

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
    {
      path: '/student/:id',
      component: () => Customize,
    },
    {
      path: '/student/payment',
      component: () => Payment,
    },
  ],
})
