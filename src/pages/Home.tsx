import {defineComponent, ref} from "vue";
import {Button, Spin} from "ant-design-vue";
import useRequest from "../hooks/useRequest";

interface Props {
}

const HomeComponent = (props: Readonly<Props>) => {
  const count = ref(0);
  const {data, run, loading} = useRequest<{data: any[]}>('/api', {
    immediate: true
  });
  return () => (
    <div>
      <Spin spinning={loading.value.isLoading} />
      <ul>
        {(data.value?.data || []).map(item => {
          return <li key={item.vod_id}>{item.vod_name}</li>;
        })}
      </ul>
      <div>{count.value}</div>
      <Button onClick={() => count.value++}>add</Button>
    </div>
  );
};
export default defineComponent(HomeComponent);
