<template>
  <nav id="side-nav">
    <el-menu id="left-menu" @select="menuSelected" :default-active="defaultIndex" router active-text-color="rgb(255, 100, 40)">
      <!-- <el-menu-item index="/">
        <i class="iconfont icon-index" style="color:#35A4F9;fontSize:12px;"></i>
        <span slot="title">手动添加</span>
      </el-menu-item> -->
      <sidebar-item :routes="leftMenus"></sidebar-item>
    </el-menu>
  </nav>
</template>

<script>
import SidebarItem from "./sidebar-item";
import {  mapGetters } from "vuex";
export default {
  name: "Sidebar",
  components: { SidebarItem },

  data() {
    return {
      defaultIndex : '',
    }
  },
  mounted() {
    // this.defaultIndex = (this.$route.meta && this.$route.meta.navigator) ? this.$route.meta.navigator : this.$route.path;
    this.defaultIndex = this.$route.path;
  },
  methods: {
    menuSelected(index, path) {},
  },
  computed:{
     ...mapGetters(["leftMenus"]) 
  },
  //监听路由变化.
  watch:{
    $route(to,from){
      // this.defaultIndex = (this.$route.meta && this.$route.meta.navigator) ? this.$route.meta.navigator : this.$route.path;
      this.defaultIndex = this.$route.path;
    }
  },
};
</script>

<style lang="scss">
.el-menu {
  background: rgb(50, 64, 87);

  .menu-wrapper {
    .el-submenu__title {
      margin-top: 10px;
      line-height: 32px;
      height: 32px;
    }

    .el-menu-item {
      background: none;
      height: 40px;
      line-height: 40px;
      font-size: 14px;
      color: #909399;
      border-top: 1px solid rgba(153, 153, 153, 0.1);
    }

    .el-submenu__title:hover {
      background: none;
    }
    .side-menu-title {
      color: white;
      font-weight: 600;
      line-height: 40px;
      height: 40px;
      font-size: 14px;
    }
    .el-submenu {
      border-top: 1px solid rgba(153, 153, 153, 0.1);
      margin-bottom: 8px;
      .is-active {
        padding-left: 36px !important;
        border-left: 4px solid #62adf4;
      }
      .el-menu-item {
        width: 180px;
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        color: #909399;
        // display: inline-block;
        border: none;
      }
      .el-menu-item:hover {
        // background: none !important;
        // background: #f7fbff;
        color: orange;
      }
      .is-active {
        border-left: 4px solid #62adf4;
        color: orange;
      }
    }
  }
}
</style>
