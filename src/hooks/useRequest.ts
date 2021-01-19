import {ref, Ref} from "vue";

const DELAY_TIME = 300;

interface UseRequestOptions {
  immediate: boolean;
}
type Fetcher<T> = () => Promise<T>;
const useRequest = <T>(fetcher: Fetcher<T>, options?: UseRequestOptions) => {
  // TODO: cancel
  const loading = ref<LoadStatus>(LoadStatus.getInstance());
  const data: Ref<T | null> = ref(null);
  const run = () => {
    loading.value.setIdle();
    setTimeout(() => {
      if (loading.value.isIdle) {
        loading.value.setLoading();
      }
    }, DELAY_TIME);
    fetcher()
      .then((res) => {
        data.value = res;
      })
      .catch(() => {
        loading.value.setError();
      })
      .finally(() => {
        setTimeout(() => {
          loading.value.setLoaded();
        }, loading.value.isIdle ? 0 : DELAY_TIME);
      })
  };
  if (options?.immediate) {
    run();
  }
  return {
    loading,
    data,
    run,
  };
};

export default useRequest;

enum LoadStatusEnum {
  IDLE,
  LOADING,
  LOADED,
  ERROR
}

export class LoadStatus {

  public get isIdle(): boolean {
    return this.status === LoadStatusEnum.IDLE;
  }

  public get isLoading(): boolean {
    return this.status === LoadStatusEnum.LOADING;
  }

  public get isLoaded(): boolean {
    return this.status === LoadStatusEnum.LOADED;
  }

  public get isError(): boolean {
    return this.status === LoadStatusEnum.ERROR;
  }

  private status: LoadStatusEnum = LoadStatusEnum.IDLE;

  public static getInstance(): LoadStatus {
    return new LoadStatus();
  }

  public setIdle(): void {
    this.status = LoadStatusEnum.IDLE;
  }

  public setLoading(): void {
    this.status = LoadStatusEnum.LOADING;
  }

  public setLoaded(): void {
    this.status = LoadStatusEnum.LOADED;
  }

  public setError(): void {
    this.status = LoadStatusEnum.ERROR;
  }
}
