<template>
  <div id="app"  
    v-loading.fullscreen.lock="appLoading" 
    element-loading-text="项目加载中" 
    element-loading-spinner="el-icon-loading"
    element-loading-background="rgba(0, 0, 0, 0.8)">
    <router-view/>
  </div>
</template>

<script>
import { mapState, mapGetters } from "vuex";

export default {
  name: 'App',
  computed:{
    ...mapState({
      appLoading: state => {
        return state.appLoading
      }
    })
  }
}
</script>

<style>
#app {
  white-space: nowrap;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  /* margin-top: 60px; */
}
</style>
