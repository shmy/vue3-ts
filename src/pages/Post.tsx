import {defineComponent} from "vue";

export default defineComponent({
  setup() {
    return () => (
      <>
        <router-link to={"/"}>hello !</router-link>
      </>
    );
  }
});
