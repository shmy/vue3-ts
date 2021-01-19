import './global.scss';
import {createApp} from 'vue'
import App from './App.vue'
import router from "./router";
import 'ant-design-vue/lib/style/index.css';

createApp(App)
  .use(router)
  .mount('#app');
