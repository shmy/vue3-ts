import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import elementPlusPlugin from "./plugins/element-plus";

createApp(App)
    .use(router)
    .use(elementPlusPlugin)
    .mount('#app');
