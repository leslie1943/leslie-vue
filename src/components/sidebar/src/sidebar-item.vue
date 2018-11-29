<template>
  <div class='menu-wrapper'>
    <template v-for="item in routes" v-if="item.hidden!=true">

      <!-- CASE:父菜单有子菜单 -->
      <template v-if="hasChildren(item)">
        <el-submenu :index="item.path" :key="item.path">
          <!-- 父菜单内容 -->
          <template slot="title">
            <div class="side-menu-title">
              <i class="iconfont" :class="item.icon ? item.icon : 'el-icon-menu'" style="color:#35A4F9;fontSize:12px;"></i>
              <span slot="title">{{ item.name }}</span>
            </div>
          </template>
          <!-- 子菜单内容 -->
           <el-menu-item v-for="(subItem,i) in item.children" v-if="subItem.hidden!==true" :key="i" :index="subItem.path">
            <div>
              <i class="iconfont" :class="subItem.icon ? subItem.icon : 'el-icon-menu'" style="color:#35A4F9;fontSize:12px;"></i>
              <span slot="title">{{ subItem.name }}</span>
            </div>
          </el-menu-item>
        </el-submenu>
      </template>

      <!-- CASE:只有父菜单 或者 是否要隐藏子菜单 -->
      <template v-else>
        <el-menu-item :index="item.path" :key="item.path">
          <div class="side-menu-title">
            <i class="iconfont" :class="item.icon ? item.icon : 'el-icon-menu'" style="color:#35A4F9;fontSize:12px;"></i>
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
    routes: Array,
  },

  methods: {
    // 是否有子菜单 或者 是否要隐藏子菜单
    hasChildren(item){
      return item.children && item.children.length && !item.hideChildren;
    }
  },
  mounted: function() {
  }
};
</script>