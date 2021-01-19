import {defineComponent, ref} from "vue";
import {Button} from "ant-design-vue";
import useRequest from "../../hooks/useRequest";
import http from "../../plugins/http";

interface Props {
}

const HomeComponent = (props: Readonly<Props>) => {
  const count = ref(0);
  const {data} = useRequest(() => http.get('/'), {immediate: true});
  return () => (
    <div>
      <div>{count.value}</div>
      <div>{data}</div>
      <Button onClick={() => count.value++}>add</Button>
    </div>
  );
};
export default defineComponent(HomeComponent);
