<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes" v-if="item.hidden!=true">

      <template v-if="item.children && item.children.length&&!item.hideChildren">
        <el-submenu :index="item.path" :key="item.path">
          <template slot="title">
            <!--  @click="expandSubmenu" -->
            <div class="side-menu-title">
              <i class="iconfont" :class="item.icon?item.icon:'el-icon-menu'" style="color:#35A4F9;fontSize:12px;"></i>
              <span slot="title">{{ item.name }}</span>
            </div>
          </template>
          <el-menu-item v-if="subItem.hidden!==true" v-for="(subItem,i) in item.children" :key="i" :index="subItem.path">
            <span>
              {{ subItem.name }}</span>
          </el-menu-item>
        </el-submenu>
      </template>

      <template v-else>
        <el-menu-item :index="item.path" :key="item.path">
          <div class="side-menu-title">
            <i class="iconfont" :class="item.icon?item.icon:'el-icon-menu'" style="color:#35A4F9;fontSize:12px;"></i>
            <span slot="title">{{ item.name }}</span>
          </div>
        </el-menu-item>
      </template>
    </template>
  </div>
</template>

<script>
export default {
  name: "SidebarItem",
  props: {
    routes: {
      type: Array
    }
  },

  methods: {
    expandSubmenu(e) {
      e.preventDefault();
      e.stopPropagation();
    }
  },
  mounted: function() {
  }
};
</script>