import {defineComponent, ref, onBeforeMount} from "vue";
import {Button} from "ant-design-vue";
import useRequest from "../hooks/useRequest";

interface Props {
}

const HomeComponent = (props: Readonly<Props>) => {
  const count = ref(0);
  const {data, run, loading} = useRequest('/api/s_feifei3.4', {
    immediate: true
  });
  onBeforeMount(() => {
    console.log('onBeforeMount')
  });
  onBeforeMount(() => {
    console.log('onBeforeMount')
  });
  onBeforeMount(() => {
    console.log('onBeforeMount')
  });
  return () => (
    <div>
      <p>---</p>
      <p>{JSON.stringify(loading.value.isLoading)}</p>
      {data && <p>{JSON.stringify(data)}</p>}
      <div>{count.value}</div>
      <Button onClick={() => count.value++}>add</Button>
    </div>
  );
};
export default defineComponent(HomeComponent);
