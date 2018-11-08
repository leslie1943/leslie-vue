<template>
  <nav id="side-nav">
    <el-radio-group v-model="isCollapse">
      <el-radio-button :label="false" style="margin-right:20px;">展开</el-radio-button>
      <el-radio-button :label="true">收起</el-radio-button>
    </el-radio-group>
    <el-menu :collapse="isCollapse" id="left-menu" @select="menuSelected" :default-active="defaultIndex" router active-text-color="rgb(255, 100, 40)">
      <sidebar-item :routes="leftMenus"></sidebar-item>
    </el-menu>
  </nav>
</template>

<script>
import SidebarItem from "./sidebar-item";
import {  mapGetters } from "vuex";
export default {
  name: "SideBar",
  components: { SidebarItem },

  data() {
    return {
      defaultIndex : '',
      isCollapse: true,
    }
  },
  mounted() {
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
      this.defaultIndex = this.$route.path;
    }
  },
};
</script>

<style lang="scss">
.el-menu {
  background: rgb(50, 64, 87);
  // 这个地方和baseLayput里aside内的width差1个px
  width: 168px;

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

    // 子菜单样式.
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
        border: none;
      }
      .el-menu-item:hover {
        color: orange;
      }
      .is-active {
        border-left: 4px solid #62adf4;
        color: orange;
      }
    }
  }
  .el-menu-item{
      color:#909399;
  }
}
</style>
