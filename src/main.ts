import './assets/main.css';
import { createApp } from 'vue';
import App from './App.vue';
import './index.css';
import router from './router'; 
import VueFeather from 'vue-feather';

const app = createApp(App);
app.component(VueFeather.name, VueFeather);
app.use(router).mount('#app');
