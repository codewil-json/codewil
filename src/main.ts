import { createApp } from 'vue';
// eslint-disable-next-line import/extensions, import/no-unresolved
import { defineCustomElements } from 'ionicons/loader';
import App from './App.vue';
import './registerServiceWorker';
import './assets/global.css';
import router from './router';

defineCustomElements(window);

createApp(App).use(router).mount('#app');
