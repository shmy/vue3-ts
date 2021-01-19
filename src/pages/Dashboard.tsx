import {defineComponent} from "vue";
import styles from './Dashboard.module.scss';

const DashboardComponent = () => {
  return () => {
    return <main data-flex="dir:left" class={styles.dashboard}>
      <div class={styles.sidebar}></div>
      <div data-flex-box={1} data-flex="dir:top" class={styles.content}>
        <header class={styles.header}></header>
        <router-view data-flex-box={1} class={styles.routerOutlet}>
        </router-view>
      </div>
    </main>
  };
};

export default defineComponent(DashboardComponent);
