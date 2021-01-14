import { createApp } from 'vue'
import App from './App.vue'
import router from "./router";
import {ElButton} from 'element-plus';
createApp(App)
    .use(router)
    .use(ElButton)
    .mount('#app')
