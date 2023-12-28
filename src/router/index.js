import Vue from 'vue';
import VueRouter from 'vue-router';
Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    component: () => import('./components/Home.vue'),
    meta: {
      title: 'Home',
    },
  },
  {
    path: '/student',
    component: () => import('./components/Parent.vue'),
    meta: {
      title: 'Student',
    },
  },
];

const router = new VueRouter({
  mode: 'history',
  // base: process.env.BASE_URL,
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
  routes,
});

const defaultTitle = 'My App';
router.afterEach((to, from) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || defaultTitle;
  });
});

export default router;