<template>
  <div>
    <el-button>默认按钮</el-button>
    <el-empty description="暂无数据"></el-empty>
    <p>home {{loading.isLoading}}</p>
    <button @click="run()">run</button>
    <router-link to="/post">go to post</router-link>
    <div>{{data}}</div>
  </div>
</template>
<script lang="ts">
import {defineComponent} from "vue";
import useRequest from "../hooks/useRequest";

export default defineComponent({
  setup() {
    const {data, run, loading} = useRequest('http://www.zdziyuan.com/inc/s_feifei3.4', {
      immediate: true
    });
    return {
      data,
      loading,
      run
    };
  }
});
</script>