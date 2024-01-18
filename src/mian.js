import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import VueScrollTo from 'vue-scrollto';

const app = createApp(App);

app.use(router).use(VueScrollTo);

app.mount('#app');
