import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/views/HomeView.vue';
import Explore from '@/views/ExploreView.vue';
import Customize from '@/views/KitCustomizationView.vue';
import Payment from '@/views/PaymentView.vue';

export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      component: Home,
    },
    {
      path: '/explore',
      name: 'Explore',
      component: Explore,
    },
    {
      path: '/topic/:id',
      component: Customize,
      props: true
    },
    {
      path: '/cart/payment',
      component: Payment,
    },
  ],
})
