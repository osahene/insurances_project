import { createApp } from 'vue'
import App from './App.vue'
import store  from './store/index.js';
import router from './router'

// styles

import "@fortawesome/fontawesome-free/css/all.min.css";
import "@/assets/styles/tailwind_1.css";
import "@/assets/styles/index.css";


// app config

createApp(App).use(store).use(router).mount('#app')
