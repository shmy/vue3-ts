import {defineComponent, ref} from "vue";
import {Button} from "ant-design-vue";

interface Props {
}

const HomeComponent = (props: Readonly<Props>) => {
  const count = ref(0);

  return () => (
    <div>
      <div>{count.value}</div>
      <Button onClick={() => count.value++}>add</Button>
    </div>
  );
};
export default defineComponent(HomeComponent);
